import { accountSheets } from "./accountSheets/index.js"
import { accountStatements } from "./accountStatements/index.js"
import { accounts, } from "./accounts/index.js"
import { attachments } from "./attachments/index.js"
import { computationStatements } from "./computationStatements/index.js"
import { computations } from "./computations/index.js"
import { journals } from "./journals/index.js"
import { organizations } from "./organizations/index.js"
import { profile } from "./profile/index.js"
import { records } from "./records/index.js"
import { rows } from "./rows/index.js"
import { services } from "./services/index.js"
import { sheets } from "./sheets/index.js"
import { statements } from "./statements/index.js"
import { users } from "./users/index.js"
import { years } from "./years/index.js"


export const auth = {
    accounts: accounts,
    accountSheets: accountSheets,
    accountStatements: accountStatements,
    records: records,
    computations: computations,
    computationStatements: computationStatements,
    sheets: sheets,
    statements: statements,
    attachments: attachments,
    organizations: organizations,
    rows: rows,
    journals: journals,
    users: users,
    years: years,
    services: services,
    profile: profile
}
