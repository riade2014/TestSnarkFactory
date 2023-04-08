const organistion = {
    name: "entreprise",
    securityCheck: "03/10/2021",
    services: [
        {
            name: "commercial",
            securityCheck: "03/10/2021",
            services: [
                {
                    name: "vente",
                    securityCheck: "14/11/2021",
                },
                {
                    name: "marketing",
                    securityCheck: "30/06/2020",
                },
                {
                    name: "communication",
                    securityCheck: "08/03/2021",
                    services: [
                        {
                            name: "design",
                            securityCheck: "27/07/2021",
                        }
                    ]
                },
            ]
        },
        {
            name: "technique",
            securityCheck: "24/08/2021",
            services: [
                {
                    name: "electronique",
                    securityCheck: "14/11/2021",
                },
                {
                    name: "robotique",
                    securityCheck: "30/06/2020",
                    services: [
                        {
                            name: "mecanique",
                            securityCheck: "12/08/2021",
                        },
                        {
                            name: "automatisme",
                            securityCheck: "01/09/2021",
                        },
                        {
                            name: "IA",
                            securityCheck: "07/09/2021",
                        }
                    ]
                }
            ]
        },
        {
            name: "logistique",
            securityCheck: "03/08/2021",
            services: [
                {
                    name: "transport",
                    securityCheck: "14/11/2021",
                },
                {
                    name: "etiquetage",
                    securityCheck: "30/06/2020",
                },
                {
                    name: "nettoyage",
                    securityCheck: "05/09/2021",
                }
            ]
        }
    ]
}

function getServices(){
    service = organistion.services

    service.forEach(element => {
       console.log(service.hasOwnProperty('services'))
       if(service.hasOwnProperty('services')){
       element.services.map(element1 =>{
        console.log(element1.name)
        /*res = element1.name
        console.log(res)
        console.log(Object.keys(res).length)*/
        /*element1.services.forEach(el =>{
                res = el.name
                console.log(res)
            })*/
    })
    }
    });
}
getServices()
