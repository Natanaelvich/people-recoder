export default {
  findall(connection) {
    return new Promise((resolv, reject) => {
      connection.query('select * from peoples', (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolv(result)
        }
      })
    })
  },

  findone(connection, id) {
    return new Promise((resolv, reject) => {
      connection.query(
        `select * from peoples where id =  ${id}`,
        (err, result) => {
          if (err) {
            reject(err)
          } else {
            resolv(result)
          }
        }
      )
    })
  },

  delete(connection, id) {
    return new Promise((resolv, reject) => {
      connection.query(`delete from peoples where id =${id} `, err => {
        if (err) {
          reject(err)
        } else {
          resolv()
        }
      })
    })
  },

  update(connection, id, name, jobRole) {
    return new Promise((resolv, reject) => {
      connection.query(
        `update  peoples set name = '${name}', job_role = '${jobRole}' where id =${id} `,
        err => {
          if (err) {
            reject(err)
          } else {
            resolv()
          }
        }
      )
    })
  },

  create(connection, name, jobRole) {
    return new Promise((resolv, reject) => {
      connection.query(
        `insert into  peoples(name,job_role) values('${name}','${jobRole}')`,
        err => {
          if (err) {
            reject(err)
          } else {
            resolv()
          }
        }
      )
    })
  },
}
