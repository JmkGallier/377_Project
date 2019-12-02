class mainDatabase {
    constructor(dao) {
        this.dao = dao
    }

    createTable() {
        const sql = `
      CREATE TABLE IF NOT EXISTS mainDB (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        payee TEXT,
        agency TEXT,
        zip INTEGER,
        amount INTEGER,
        description TEXT`;
        return this.dao.run(sql)
    }

    create(payee_name, agency_name, zip_code, amount, payment_desc) {
        return this.dao.run(
            'INSERT INTO mainDB (payee, agency, zip, amount, description) VALUES (?, ?, ?, ?, ?)',
            [payee_name, agency_name, zip_code, amount, payment_desc])
    }
}

module.exports = mainDatabase;