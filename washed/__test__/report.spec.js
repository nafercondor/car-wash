const reportController = require("../controller/report");

describe("Filter function", () => {
    test("it should filter by a search worker id 617abbd0e7ec5027b9137493", async() => {
      const input = {
        from : "2021-11-02T00.00.00.889Z",
        to : "2021-11-02T23:55:03.889Z",
        idWorker : "617abbd0e7ec5027b9137493"
      }
  
      const output = {
        "totalServices": 5500,
        "washes": [
            {
                "idWorker": "617abbd0e7ec5027b9137493",
                "nameWorker": "Nafer Hernandez",
                "services": [
                    {
                        "name": "Grafitado",
                        "description": "",
                        "price": 2000,
                        "active": false
                    },
                    {
                        "name": "Encerada",
                        "description": "",
                        "price": 1500,
                        "active": false
                    }
                ],
                "dateOfEntry": "2021-11-02T10:55:03.889Z",
                "totalServices": 3500
            },
            {
                "idWorker": "617abbd0e7ec5027b9137493",
                "nameWorker": "Nafer Hernandez",
                "services": [
                    {
                        "name": "Grafitado",
                        "description": "",
                        "price": 2000,
                        "active": false
                    }
                ],
                "dateOfEntry": "2021-11-02T10:55:03.889Z",
                "totalServices": 2000
            }
        ]
    }

    //let data = await reportController.report(input);

    reportController.report(input).then(data => {
      expect(data).resolves.toBe(output);
    });
 
  
    });
  });