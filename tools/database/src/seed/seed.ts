import { contactRelationships, eventTypes, genres, occurrenceStates, paymentMethods } from '@monassosportive/schemas/components'
import { account, accountConversation, adherent, adherentContact, adherentEvent, adherentLesson, adherentRollcall, adherentSeason, ageCategory, announcement, announcementContact, association, associationSport, collaborator, collaboratorEvent, collaboratorLesson, collaboratorSeason, contact, conversation, event, eventSeason, lesson, lessonRegistration, lessonRegistrationForm, lessonSeason, message, occurrence, order, permission, permissionRole, plan, position, registration, registrationForm, role, rollcall, season, sport, subscription } from '@monassosportive/schemas/models'
import { generateId } from '@monassosportive/schemas/services'
import { rand, randAddress, randBetweenDate, randBoolean, randHex, randNumber, randUrl } from '@ngneat/falso'
import { pbkdf2Sync, randomBytes } from "crypto"
import { drizzle } from "drizzle-orm/postgres-js"
import { customAlphabet } from "nanoid"
import postgres from "postgres"
import { config } from './config'
import { ageCategories, annoucements, events, forenames, lessons, messages, sports, surnames } from './dataToSeed'
import { permissions } from './permissions'
import { permissionRoles } from './rolePermissions'
import { env } from '../env'


export function generateTemporaryPassword(): string {
    const generateHex = customAlphabet('1234567890abcdef', 8)

    return generateHex()
}

export function removeAccents(text: string) {
    return text.normalize('NFD').replaceAll(" ", "").replaceAll(/[\u0300-\u036f]/g, '')
}

const connection = postgres(env()?.DATABASE_URL ?? "", { max: 1 })
const db = drizzle(connection)

// const phoneCountryCodes = ["FR", "GY", "RE", "WF", "MQ", "NC", "PF", "BE", "CH", "LU"] as const
const phonePrefixes = [33, 590, 594, 596, 262, 508, 681, 687, 689, 32, 41, 352] as const

async function seed() {
    try {
        await db.transaction(async (tx) => {

            // Seasons
            console.log("Seasons added")
            const newSeasons: (typeof season.model.$inferInsert)[] = [
                {
                    id: generateId(),
                    startingAt: new Date(2024, 8, 1, 12, 0).toISOString(),
                    endingAt: new Date(2025, 7, 31, 12, 0).toISOString(),
                    state: "next"
                },
                {
                    id: generateId(),
                    startingAt: new Date(2023, 8, 1, 12, 0).toISOString(),
                    endingAt: new Date(2024, 7, 31, 12, 0).toISOString(),
                    state: "current"
                },
                {
                    id: generateId(),
                    startingAt: new Date(2022, 8, 1, 12, 0).toISOString(),
                    endingAt: new Date(2023, 7, 31, 12, 0).toISOString(),
                    state: "previous"
                },
                {
                    id: generateId(),
                    startingAt: new Date(2021, 8, 1, 12, 0).toISOString(),
                    endingAt: new Date(2022, 7, 31, 12, 0).toISOString(),
                    state: "previous"
                }
            ]
            await tx.insert(season.model).values(newSeasons)
            const shuffledSeasons = newSeasons.sort((a, b) => 0.5 - Math.random())

            // Plan
            console.log("Plans added")
            const newPlans: (typeof plan.model.$inferInsert)[] = [
                {
                    id: generateId(),
                    key: "small",
                    label: "Petite",
                    color: "#068f5b",
                    maxAdherents: 50,
                    monthlyPrice: Number(25.00).toString(),
                    yearlyDiscount: Number(0.1).toString()
                },
                {
                    id: generateId(),
                    key: "medium",
                    label: "Moyenne",
                    color: "#0173a3",
                    maxAdherents: 100,
                    monthlyPrice: Number(30.00).toString(),
                    yearlyDiscount: Number(0.1).toString()
                },
                {
                    id: generateId(),
                    key: "large",
                    label: "Grande",
                    color: "#cc0000",
                    maxAdherents: 200,
                    monthlyPrice: Number(50.00).toString(),
                    yearlyDiscount: Number(0.1).toString()
                }
            ]
            await tx.insert(plan.model).values(newPlans)

            // Subscription & association
            console.log("Association added")
            const idNewSubscription = generateId()

            const newAssociation: (typeof association.model.$inferInsert) = {
                id: generateId(),
                idRNA: "W751234097",
                name: "MonAssoDemo",
                description: "Une asso pour ceux qui aiment le sport !",
                urlLogo: randUrl(),
                address: randAddress().city,
                lastUpdatedBy: "monassosportive",
                createdBy: "monassosportive"
            }

            const duration = 15
            const expiringDate = new Date(new Date().getTime() + duration * (1000 * 60 * 60 * 24))

            const idPlan = rand(newPlans).id
            const newSubscription: (typeof subscription.model.$inferInsert) = {
                id: idNewSubscription,
                idAssociation: newAssociation.id,
                idPlan: idPlan,
                trialExpiresAt: expiringDate.toISOString(),
                isAutomaticallyRenewed: false,
                lastUpdatedBy: "monassosportive",
                createdBy: "monassosportive"
            }

            const newOrder = {
                id: generateId(),
                idAssociation: newAssociation.id,
                idPrePlan: idPlan,
                idPostPlan: idPlan,
                label: `Version d'essai de ${duration} jours`,
                type: "trial_version" as const,
                quantity: 1,
                duration: duration,
                discount: Number(0).toString(),
                unitPrice: Number(0).toString(),
                operationAmount: Number(0).toString(),
                reductionAmount: Number(0).toString(),
                deliveryStartingAt: (new Date()).toISOString(),
                deliveryEndingAt: expiringDate.toISOString(),
                isConfirmed: true,
                lastUpdatedBy: "monassosportive",
                createdBy: "monassosportive"
            }

            await tx.insert(association.model).values(newAssociation)
            await tx.insert(order.model).values(newOrder)
            await tx.insert(subscription.model).values(newSubscription)

            // Contacts init
            const newContacts: (typeof contact.model.$inferInsert)[] = []

            // Association admin contact
            const adminContact: (typeof contact.model.$inferInsert) = {
                id: generateId(),
                idAssociation: newAssociation.id,
                type: "account" as const,
                forename: rand(forenames).toLowerCase(),
                surname: rand(surnames).toLowerCase(),
                email: "demo@monassosportive.fr",
                phonePrefix: rand(phonePrefixes).toString(),
                phoneNumber: randNumber({ min: 0, max: 9, length: randNumber({ min: 1, max: 12 }) }).join(""),
                lastUpdatedBy: "monassosportive",
                createdBy: "monassosportive"
            }
            newContacts.push(adminContact)
            await tx.insert(contact.model).values(adminContact)

            // Association admin account
            const passwordSalt = randomBytes(16).toString('hex')
            const passwordTemporary = generateTemporaryPassword()
            const passwordHash = pbkdf2Sync(passwordTemporary, passwordSalt, 128000, 64, `sha512`).toString(`hex`)
            const adminAccount: (typeof account.model.$inferInsert) = {
                id: generateId(),
                idAssociation: newAssociation.id,
                idContact: adminContact.id,
                emailAddress: adminContact.email,
                isAdmin: true,
                passwordHash: passwordHash,
                passwordTemporary: passwordTemporary,
                passwordTemporaryHash: passwordHash,
                passwordSalt: passwordSalt,
                lastUpdatedBy: "monassosportive",
                createdBy: "monassosportive",
            }
            await tx.insert(account.model).values(adminAccount)


            // Permissions
            console.log("Permissions added")
            const newPermissions = permissions.flatMap(permission => {
                return permission.actions.map(action => {
                    return ({
                        id: generateId(),
                        resource: permission.resource,
                        action: action
                    })
                })
            })
            await tx.insert(permission.model).values(newPermissions)


            // Role
            console.log("Roles added")
            const newRole: (typeof role.model.$inferInsert) = {
                id: generateId(),
                idAssociation: newAssociation.id,
                label: "Collaborateur",
                lastUpdatedBy: adminAccount.id,
                createdBy: adminAccount.id
            }
            await tx.insert(role.model).values(newRole)

            const newPermissionRoles = permissionRoles.flatMap((_permissionRole) => {
                return _permissionRole.actions.reduce((acc, action) => {
                    const permission = newPermissions.find(x => (x.resource === _permissionRole.resource) && (x.action === action))
                    if (!permission) return acc
                    acc.push({
                        id: generateId(),
                        idPermission: permission.id,
                        idRole: newRole.id,
                        scope: _permissionRole.scope
                    })
                    return acc
                }, [] as (typeof permissionRole.model.$inferInsert)[])
            })
            await tx.insert(permissionRole.model).values(newPermissionRoles)


            // Sports
            console.log("Sports added")
            const shuffledSports = sports.sort((a, b) => 0.5 - Math.random())

            const sportIds: string[] = Array.from(Array(randNumber({ min: config.sport.min, max: config.sport.max })), () => generateId())
            const newAgeCategories: (typeof ageCategory.model.$inferInsert)[] = []
            const newSports: (typeof sport.model.$inferInsert)[] = sportIds.map((idSport, index) => {
                const sportLabel = shuffledSports[index]
                const newSport = {
                    id: idSport,
                    key: sportLabel.toLowerCase(),
                    label: sportLabel
                }

                Array.from(Array(randNumber({ min: config.ageCategories.min, max: config.ageCategories.max })), () => generateId()).forEach((idAgeCategory) => {
                    const startingDate = randBetweenDate({ from: new Date('01/01/1970'), to: new Date('01/01/2016') })
                    const endingDate = new Date(startingDate.getTime())
                    endingDate.setFullYear(endingDate.getFullYear() + randNumber({ min: 1, max: 3 }))
                    newAgeCategories.push({
                        id: idAgeCategory,
                        idSport: newSport.id,
                        label: rand(ageCategories),
                        minYear: startingDate.getFullYear(),
                        maxYear: endingDate.getFullYear()
                    })
                })

                return newSport
            })
            await tx.insert(sport.model).values(newSports)
            await tx.insert(ageCategory.model).values(newAgeCategories)


            // AssociationSport
            const newAssociationSports: (typeof associationSport.model.$inferInsert)[] = Array.from(Array(randNumber({ min: config.associationSport.min, max: config.associationSport.max })), () => generateId())
                .map((idAssociationSport, index) => ({
                    id: idAssociationSport,
                    idAssociation: newAssociation.id,
                    idSport: newSports[index].id
                }))
            await tx.insert(associationSport.model).values(newAssociationSports)


            // Positions
            console.log("Positions added")
            const newPositions = [
                {
                    id: generateId(),
                    idAssociation: newAssociation.id,
                    label: "Bénévole",
                    lastUpdatedBy: "monassosportive",
                    createdBy: "monassosportive"
                },
                {
                    id: generateId(),
                    idAssociation: newAssociation.id,
                    label: "Professeur",
                    lastUpdatedBy: "monassosportive",
                    createdBy: "monassosportive"
                },
                {
                    id: generateId(),
                    idAssociation: newAssociation.id,
                    label: "Directeur technique",
                    lastUpdatedBy: "monassosportive",
                    createdBy: "monassosportive"
                },
                {
                    id: generateId(),
                    idAssociation: newAssociation.id,
                    label: "Président",
                    lastUpdatedBy: "monassosportive",
                    createdBy: "monassosportive"
                },
                {
                    id: generateId(),
                    idAssociation: newAssociation.id,
                    label: "Trésorier",
                    lastUpdatedBy: "monassosportive",
                    createdBy: "monassosportive"
                }
            ]
            await tx.insert(position.model).values(newPositions)


            // Collaborators
            console.log("Collaborators added")
            const collaboratorIds: string[] = Array.from(Array(randNumber({ min: config.collaborator.min, max: config.collaborator.max })), () => generateId())
            const newCollaboratorContacts: (typeof contact.model.$inferInsert)[] = []
            const newCollaboratorSeasons: (typeof collaboratorSeason.model.$inferInsert)[] = []
            const newCollaborators: (typeof collaborator.model.$inferInsert)[] = []

            collaboratorIds.forEach((idCollaborator) => {

                const forename = rand(forenames).toLowerCase()
                const surname = rand(surnames).toLowerCase()
                const newContact = {
                    id: generateId(),
                    idAssociation: newAssociation.id,
                    type: "collaborator" as const,
                    forename: forename,
                    surname: surname,
                    email: `${removeAccents(forename)}.${removeAccents(surname)}@email.com`,
                    phonePrefix: rand(phonePrefixes).toString(),
                    phoneNumber: randNumber({ min: 0, max: 9, length: randNumber({ min: 1, max: 12 }) }).join(""),
                    lastUpdatedBy: adminAccount.id,
                    createdBy: adminAccount.id
                }

                const newCollaborator = {
                    id: idCollaborator,
                    idAssociation: newAssociation.id,
                    idContact: newContact.id,
                    idPosition: rand(newPositions).id,
                    lastUpdatedBy: adminAccount.id,
                    createdBy: adminAccount.id
                }

                Array.from(Array(randNumber({ min: config.collaboratorSeason.min, max: config.collaboratorSeason.max })), () => generateId()).forEach((idCollaboratorSeason, index) => {
                    newCollaboratorSeasons.push({
                        id: idCollaboratorSeason,
                        idCollaborator: newCollaborator.id,
                        idSeason: shuffledSeasons[index].id
                    })
                })

                newCollaboratorContacts.push(newContact)
                newContacts.push(newContact)
                newCollaborators.push(newCollaborator)
            })
            await tx.insert(contact.model).values(newCollaboratorContacts)
            await tx.insert(collaborator.model).values(newCollaborators)
            await tx.insert(collaboratorSeason.model).values(newCollaboratorSeasons)


            // Accounts
            console.log("Accounts added")
            const accountIds: string[] = Array.from(Array(randNumber({ min: config.account.min, max: config.account.max })), () => generateId())
            const _collaboratorIds = [...collaboratorIds.sort((a, b) => 0.5 - Math.random()).slice(0, accountIds.length), undefined]
            const newAccountContacts: (typeof contact.model.$inferInsert)[] = []
            const newAccounts: (typeof account.model.$inferInsert)[] = accountIds.map((idAccount, index) => {

                const forename = rand(forenames).toLowerCase()
                const surname = rand(surnames).toLowerCase()

                const newContact = {
                    id: generateId(),
                    idAssociation: newAssociation.id,
                    type: "account" as const,
                    forename: forename,
                    surname: surname,
                    email: `${removeAccents(forename)}.${removeAccents(surname)}@email.com`,
                    phonePrefix: rand(phonePrefixes).toString(),
                    phoneNumber: randNumber({ min: 0, max: 9, length: randNumber({ min: 1, max: 12 }) }).join(""),
                    lastUpdatedBy: adminAccount.id,
                    createdBy: adminAccount.id
                }
                newAccountContacts.push(newContact)
                newContacts.push(newContact)

                const passwordSalt = randomBytes(16).toString('hex')
                const passwordTemporary = generateTemporaryPassword()
                const passwordHash = pbkdf2Sync(passwordTemporary, passwordSalt, 128000, 64, `sha512`).toString(`hex`)
                return ({
                    id: idAccount,
                    idAssociation: newAssociation.id,
                    idContact: newContact.id,
                    idRole: newRole.id,
                    idCollaborator: _collaboratorIds[index],
                    emailAddress: newContact.email,
                    isAdmin: false,
                    passwordHash: passwordHash,
                    passwordTemporary: passwordTemporary,
                    passwordTemporaryHash: passwordHash,
                    passwordSalt: passwordSalt,
                    lastUpdatedBy: adminAccount.id,
                    createdBy: adminAccount.id,
                })
            })
            await tx.insert(contact.model).values(newAccountContacts)
            await tx.insert(account.model).values(newAccounts)


            // Adherents
            console.log("Adherents added")
            const adherentIds: string[] = Array.from(Array(randNumber({ min: config.adherent.min, max: config.adherent.max })), () => generateId())
            const newAdherentContacts: (typeof contact.model.$inferInsert)[] = []
            const newAdherentSeasons: (typeof adherentSeason.model.$inferInsert)[] = []
            const adherentAdherentContacts: (typeof adherentContact.model.$inferInsert)[] = []
            const newAdherents: (typeof adherent.model.$inferInsert)[] = []

            adherentIds.forEach((idAdherent) => {
                const currentIdAccount = rand([...accountIds, adminAccount.id])

                const forename = rand(forenames).toLowerCase()
                const surname = rand(surnames).toLowerCase()
                const newAdherent = {
                    id: idAdherent,
                    idAssociation: newAssociation.id,
                    forename: forename,
                    surname: surname,
                    birthdate: randBetweenDate({ from: new Date('01/01/1970'), to: new Date('01/01/2016') }).toUTCString(),
                    urlPhoto: randUrl(),
                    isSubscriptionPaid: randBoolean(),
                    subscriptionStartingAt: new Date('01/09/2023').toISOString(),
                    subscriptionEndingAt: new Date('01/09/2024').toISOString(),
                    paymentMethod: rand([...paymentMethods, null]),
                    isMedicalStatementProvided: randBoolean(),
                    genre: rand([...genres, null]),
                    comment: null,
                    lastUpdatedBy: currentIdAccount,
                    createdBy: currentIdAccount
                }

                Array.from(Array(randNumber({ min: config.adherentSeason.min, max: config.adherentSeason.max })), () => generateId()).forEach((idAdherentSeason, index) => {
                    newAdherentSeasons.push({
                        id: idAdherentSeason,
                        idAdherent: newAdherent.id,
                        idSeason: shuffledSeasons[index].id
                    })
                })

                Array.from(Array(randNumber({ min: config.adherentContact.min, max: config.adherentContact.max })), () => generateId()).forEach((idContact, index) => {
                    const relationship = rand([...contactRelationships, null])

                    const forename = (!relationship ? newAdherent.forename : rand(forenames).toLowerCase())
                    const surname = (!relationship ? newAdherent.surname : rand(surnames).toLowerCase())
                    const newContact = {
                        id: idContact,
                        idAssociation: newAssociation.id,
                        type: "adherent" as const,
                        forename: forename,
                        surname: surname,
                        email: `${removeAccents(forename)}.${removeAccents(surname)}@email.com`,
                        phonePrefix: rand(phonePrefixes).toString(),
                        phoneNumber: randNumber({ min: 0, max: 9, length: randNumber({ min: 1, max: 12 }) }).join(""),
                        lastUpdatedBy: currentIdAccount,
                        createdBy: currentIdAccount
                    }
                    newAdherentContacts.push(newContact)
                    newContacts.push(newContact)

                    const newAdherentContact = {
                        id: generateId(),
                        idAdherent: newAdherent.id,
                        idContact: newContact.id,
                        isDefault: index === 0,
                        relationship: relationship
                    }
                    adherentAdherentContacts.push(newAdherentContact)
                })

                newAdherents.push(newAdherent)
            })
            await tx.insert(adherent.model).values(newAdherents)
            await tx.insert(contact.model).values(newAdherentContacts)
            await tx.insert(adherentContact.model).values(adherentAdherentContacts)
            await tx.insert(adherentSeason.model).values(newAdherentSeasons)


            const newOccurrences: (typeof occurrence.model.$inferInsert)[] = []

            // Lessons
            console.log("Lessons added")
            const lessonIds: string[] = Array.from(Array(randNumber({ min: config.lesson.min, max: config.lesson.max })), () => generateId())
            const lessonOccurrenceIds: string[] = []
            const newLessonSeasons: (typeof lessonSeason.model.$inferInsert)[] = []
            const newCollaboratorLessons: (typeof collaboratorLesson.model.$inferInsert)[] = []
            const newAdherentLessons: (typeof adherentLesson.model.$inferInsert)[] = []
            const newLessons: (typeof lesson.model.$inferInsert)[] = []

            lessonIds.forEach((idLesson) => {
                const currentIdAccount = rand([...accountIds, adminAccount.id])

                const lesson = rand(lessons)
                const newLesson = {
                    id: idLesson,
                    idAssociation: newAssociation.id,
                    idSport: rand(sportIds),
                    label: lesson.label,
                    description: lesson.description,
                    location: randAddress().street,
                    color: randHex(),
                    lastUpdatedBy: currentIdAccount,
                    createdBy: currentIdAccount
                }

                Array.from(Array(randNumber({ min: config.lessonSeason.min, max: config.lessonSeason.max })), () => generateId()).forEach((idLessonSeason, index) => {
                    newLessonSeasons.push({
                        id: idLessonSeason,
                        idLesson: newLesson.id,
                        idSeason: shuffledSeasons[index].id
                    })
                })

                Array.from(Array(randNumber({ min: config.occurrence.min, max: config.occurrence.max })), () => generateId()).forEach(idOccurrence => {
                    lessonOccurrenceIds.push(idOccurrence)
                    const startingDate = randBetweenDate({ from: new Date('01/09/2023'), to: new Date('01/07/2024') })
                    newOccurrences.push({
                        id: idOccurrence,
                        idAssociation: newAssociation.id,
                        idLesson: newLesson.id,
                        type: "lesson" as const,
                        startingAt: startingDate.toISOString(),
                        endingAt: new Date(startingDate.getTime() + randNumber({ min: 30, max: 180 }) * 60 * 1000).toISOString(),
                        state: rand(occurrenceStates)
                    })
                })

                collaboratorIds.sort((a, b) => 0.5 - Math.random())
                    .slice(0, randNumber({ min: config.collaboratorLesson.min, max: config.collaboratorLesson.max }))
                    .forEach((idCollaborator) => {
                        newCollaboratorLessons.push({
                            id: generateId(),
                            idLesson: newLesson.id,
                            idCollaborator: idCollaborator
                        })
                    })

                adherentIds.sort((a, b) => 0.5 - Math.random())
                    .slice(0, randNumber({ min: config.adherentLesson.min, max: config.adherentLesson.max }))
                    .forEach((idAdherent) => {
                        newAdherentLessons.push({
                            id: generateId(),
                            idLesson: newLesson.id,
                            idAdherent: idAdherent
                        })
                    })

                newLessons.push(newLesson)
            })
            await tx.insert(lesson.model).values(newLessons)
            await tx.insert(collaboratorLesson.model).values(newCollaboratorLessons)
            await tx.insert(adherentLesson.model).values(newAdherentLessons)
            await tx.insert(lessonSeason.model).values(newLessonSeasons)


            // Events
            console.log("Events added")
            const eventIds: string[] = Array.from(Array(randNumber({ min: config.event.min, max: config.event.max })), () => generateId())
            const eventOccurrenceIds: string[] = []
            const newEventSeasons: (typeof eventSeason.model.$inferInsert)[] = []
            const newCollaboratorEvents: (typeof collaboratorEvent.model.$inferInsert)[] = []
            const newAdherentEvents: (typeof adherentEvent.model.$inferInsert)[] = []
            const newEvents: (typeof event.model.$inferInsert)[] = []

            eventIds.forEach((idEvent) => {
                const currentIdAccount = rand([...accountIds, adminAccount.id])

                const event = rand(events)
                const newEvent = {
                    id: idEvent,
                    idAssociation: newAssociation.id,
                    idSport: rand(sportIds),
                    type: rand(eventTypes),
                    label: event.label,
                    description: event.description,
                    location: randAddress().street,
                    color: randHex(),
                    lastUpdatedBy: currentIdAccount,
                    createdBy: currentIdAccount
                }

                Array.from(Array(randNumber({ min: config.occurrence.min, max: config.occurrence.max })), () => generateId()).forEach(idOccurrence => {
                    eventOccurrenceIds.push(idOccurrence)
                    const startingDate = randBetweenDate({ from: new Date('01/09/2023'), to: new Date('01/07/2024') })
                    const endingDate = new Date(startingDate.getTime())
                    endingDate.setHours(startingDate.getHours() + randNumber({ min: 1, max: 3 }))
                    newOccurrences.push({
                        id: idOccurrence,
                        idAssociation: newAssociation.id,
                        idEvent: newEvent.id,
                        type: "event" as const,
                        isAllDay: randBoolean(),
                        startingAt: startingDate.toISOString(),
                        endingAt: endingDate.toISOString(),
                        state: rand(occurrenceStates),
                    })
                })

                Array.from(Array(randNumber({ min: config.eventSeason.min, max: config.eventSeason.max })), () => generateId()).forEach((idEventSeason, index) => {
                    newEventSeasons.push({
                        id: idEventSeason,
                        idEvent: newEvent.id,
                        idSeason: shuffledSeasons[index].id
                    })
                })

                collaboratorIds.sort((a, b) => 0.5 - Math.random())
                    .slice(0, randNumber({ min: config.collaboratorEvent.min, max: config.collaboratorEvent.max }))
                    .forEach((idCollaborator) => {
                        newCollaboratorEvents.push({
                            id: generateId(),
                            idEvent: newEvent.id,
                            idCollaborator: idCollaborator
                        })
                    })

                adherentIds.sort((a, b) => 0.5 - Math.random())
                    .slice(0, randNumber({ min: config.adherentEvent.min, max: config.adherentEvent.max }))
                    .forEach((idAdherent) => {
                        newAdherentEvents.push({
                            id: generateId(),
                            idEvent: newEvent.id,
                            idAdherent: idAdherent
                        })
                    })

                newEvents.push(newEvent)
            })
            await tx.insert(event.model).values(newEvents)
            await tx.insert(collaboratorEvent.model).values(newCollaboratorEvents)
            await tx.insert(adherentEvent.model).values(newAdherentEvents)
            await tx.insert(eventSeason.model).values(newEventSeasons)

            // Occurrences
            console.log("Occurrences added")
            await tx.insert(occurrence.model).values(newOccurrences)

            // RegistrationForms
            console.log("RegistrationForms added")
            const newRegistrationForm = {
                id: generateId(),
                idSeason: shuffledSeasons[0].id,
                label: "Formulaire nouvelle saison",
                isActive: true,
                idAssociation: newAssociation.id,
                lastUpdatedBy: "monassosportive",
                createdBy: "monassosportive"
            }

            const newLessonRegistrationForms: (typeof lessonRegistrationForm.model.$inferInsert)[] = []
            const newRegistrations: (typeof registration.model.$inferInsert)[] = []
            const newLessonRegistrations: (typeof lessonRegistration.model.$inferInsert)[] = []

            lessonIds.sort((a, b) => 0.5 - Math.random())
                .slice(0, randNumber({ min: config.lessonRegistrationForm.min, max: config.lessonRegistrationForm.max }))
                .forEach((idLesson) => {
                    newLessonRegistrationForms.push({
                        id: generateId(),
                        idLesson: idLesson,
                        idRegistrationForm: newRegistrationForm.id
                    })
                })

            Array.from(Array(randNumber({ min: config.registration.min, max: config.registration.max })), () => generateId())
                .forEach((idRegistration) => {
                    const forename = rand(forenames).toLowerCase()
                    const surname = rand(surnames).toLowerCase()
                    const contactForename = rand([forename, rand(forenames).toLowerCase()])
                    newRegistrations.push({
                        id: idRegistration,
                        idAssociation: newAssociation.id,
                        idRegistrationForm: newRegistrationForm.id,
                        forename: forename,
                        surname: surname,
                        contactForename: contactForename,
                        contactSurname: surname,
                        contactEmail: `${removeAccents(contactForename)}.${removeAccents(surname)}@email.com`,
                        contactPhonePrefix: rand(phonePrefixes).toString(),
                        contactPhoneNumber: randNumber({ min: 0, max: 9, length: randNumber({ min: 1, max: 12 }) }).join(""),
                        contactRelationship: rand([...contactRelationships, null]),
                        birthdate: randBetweenDate({ from: new Date('01/01/1970'), to: new Date('01/01/2016') }).toUTCString(),
                        isSubscriptionPaid: randBoolean(),
                        paymentMethod: rand([...paymentMethods, null]),
                        isMedicalStatementProvided: randBoolean(),
                        genre: rand([...genres, null]),
                        comment: null,
                        lastUpdatedBy: "monassosportive",
                        createdBy: "monassosportive"
                    })
                })

            newRegistrations.forEach((registration) => {
                newLessonRegistrations.push({
                    id: generateId(),
                    idLesson: rand(newLessonRegistrationForms.map(x => x.idLesson)),
                    idRegistration: registration.id
                })
            })

            await tx.insert(registrationForm.model).values(newRegistrationForm)
            await tx.insert(lessonRegistrationForm.model).values(newLessonRegistrationForms)
            await tx.insert(registration.model).values(newRegistrations)
            await tx.insert(lessonRegistration.model).values(newLessonRegistrations)


            // Rollcalls
            console.log("Rollcalls added")
            const rollcallIds: string[] = Array.from(Array(randNumber({ min: config.rollcall.min, max: config.rollcall.max })), () => generateId())
            const newAdherentRollcalls: (typeof adherentRollcall.model.$inferInsert)[] = []
            const _rollcallOccurrences: string[] = []
            // newLessons.sort((a, b) => 0.5 - Math.random()).slice(0, rollcallIds.length)
            // const _events = newEvents.sort((a, b) => 0.5 - Math.random()).slice(0, rollcallIds.length)
            const newRollcalls: (typeof rollcall.model.$inferInsert)[] = rollcallIds.map((idRollcall) => {
                const currentIdAccount = rand([...accountIds, adminAccount.id])
                const _occurrences = [...newOccurrences].filter(x => !_rollcallOccurrences.includes(x.id))
                const _occurrence = rand(_occurrences)

                const newRollcall = {
                    id: idRollcall,
                    idAssociation: newAssociation.id,
                    idOccurrence: _occurrence.id,
                    lastUpdatedBy: currentIdAccount,
                    createdBy: currentIdAccount
                }
                _rollcallOccurrences.push(newRollcall.idOccurrence)

                if (_occurrence.type === "lesson") {
                    newAdherentLessons.filter(x => x.idLesson === _occurrence.idLesson).forEach(adherentLesson => {
                        newAdherentRollcalls.push({
                            id: generateId(),
                            idRollcall: idRollcall,
                            idAdherent: adherentLesson.idAdherent,
                            isPresent: randBoolean()
                        })
                    })
                }
                if (_occurrence.type === "event") {
                    newAdherentEvents.filter(x => x.idEvent === _occurrence.idEvent).forEach(adherentEvent => {
                        newAdherentRollcalls.push({
                            id: generateId(),
                            idRollcall: idRollcall,
                            idAdherent: adherentEvent.idAdherent,
                            isPresent: randBoolean()
                        })
                    })
                }

                return newRollcall
            })
            await tx.insert(rollcall.model).values(newRollcalls)
            await tx.insert(adherentRollcall.model).values(newAdherentRollcalls)


            // Conversations
            console.log("Conversations added")
            const conversationIds: string[] = Array.from(Array(randNumber({ min: config.conversation.min, max: config.conversation.max })), () => generateId())
            const newMessages: (typeof message.model.$inferInsert)[] = []
            const newAccountConversations: (typeof accountConversation.model.$inferInsert)[] = []
            const newConversations: (typeof conversation.model.$inferInsert)[] = []

            const accounts = [...newAccounts, adminAccount]
            accounts.forEach((newAccount, index) => {
                const randAccounts = [...newAccounts].filter(x => x.id !== newAccount.id).sort(() => randNumber()).slice(0, config.accountConversation.max)

                const newConversation = {
                    id: generateId(),
                    lastUpdatedBy: newAccount.id,
                    createdBy: newAccount.id
                }
                newConversations.push(newConversation)

                newAccountConversations.push({
                    id: generateId(),
                    idAccount: newAccount.id,
                    idConversation: newConversation.id,
                    isAdmin: true
                })

                Array.from(Array(randNumber({ min: config.accountConversation.min, max: config.accountConversation.max })), () => generateId())
                    .forEach((idAccountConversation, index) => {
                        const idAccount = randAccounts[index].id
                        newAccountConversations.push({
                            id: idAccountConversation,
                            idAccount: idAccount,
                            idConversation: newConversation.id,
                            isAdmin: newAccount.id === idAccount,
                        })
                    })


                Array.from(Array(randNumber({ min: config.message.min, max: config.message.max })), () => generateId())
                    .forEach((idMessage) => {
                        const idAccount = rand(randAccounts).id
                        newMessages.push({
                            id: idMessage,
                            idConversation: newConversation.id,
                            idAccount: idAccount,
                            content: rand(messages),
                            lastUpdatedBy: idAccount,
                            createdBy: idAccount
                        })
                    })

                return newConversation
            })

            await tx.insert(conversation.model).values(newConversations)
            await tx.insert(accountConversation.model).values(newAccountConversations)
            await tx.insert(message.model).values(newMessages)


            // Announcements
            console.log("Announcements added")
            const contacts = [...newCollaboratorContacts, ...newAccountContacts, ...newAdherentContacts]
            const announcementIds: string[] = Array.from(Array(randNumber({ min: config.announcement.min, max: config.announcement.max })), () => generateId())
            const newAnnouncementContacts: (typeof announcementContact.model.$inferInsert)[] = []
            const newAnnouncements: (typeof announcement.model.$inferInsert)[] = announcementIds.map((idAnnouncement) => {
                const currentAccount = rand([...newAccounts, adminAccount])

                const announcement = rand(annoucements)
                const newAnnouncement = {
                    id: idAnnouncement,
                    idAssociation: newAssociation.id,
                    label: announcement.label,
                    subject: announcement.subject,
                    body: announcement.body,
                    isDraft: true,
                    lastUpdatedBy: currentAccount.id,
                    createdBy: currentAccount.id
                }

                contacts.sort((a, b) => 0.5 - Math.random())
                    .slice(0, randNumber({ min: config.announcementContact.min, max: config.announcementContact.max }))
                    .forEach((contact) => {
                        newAnnouncementContacts.push({
                            id: generateId(),
                            idAnnouncement: newAnnouncement.id,
                            idContact: contact.id
                        })
                    })

                return newAnnouncement
            })
            await tx.insert(announcement.model).values(newAnnouncements)
            await tx.insert(announcementContact.model).values(newAnnouncementContacts)

            console.log("Seeding is done.")
        })
    } catch (error) {
        console.log(error)
    }
}

console.log("Seeding starting.")
await seed()

process.exit()
