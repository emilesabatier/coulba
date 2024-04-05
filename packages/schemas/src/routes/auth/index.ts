import { accounts } from "./accounts/index.js"
import { attachments } from "./attachments/index.js"
import { companies } from "./companies/index.js"
import { journals } from "./journals/index.js"
import { profile } from "./profile/index.js"
import { records } from "./records/index.js"
import { services } from "./services/index.js"
import { sheets } from "./sheets/index.js"
import { statements } from "./statement/index.js"
import { transactions } from "./transactions/index.js"
import { users } from "./users/index.js"
import { years } from "./years/index.js"


export const auth = {
    accounts: accounts,
    sheets: sheets,
    statements: statements,
    attachments: attachments,
    companies: companies,
    records: records,
    transactions: transactions,
    journals: journals,
    users: users,
    years: years,
    services: services,
    profile: profile
}
