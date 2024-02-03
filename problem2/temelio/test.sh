curl -XGET http://localhost:8080/nonprofits 
curl -XPOST http://localhost:8080/nonprofits -d '{"legalName": "MMM", "address": { "street": "12 NNN", "city": "AKA", "state": "MY", "zipCode": "123" }, "ein": "EIN-113" , "mission": "xvzxvzxv" }' -H "Content-Type: application/json"


curl -XPOST http://localhost:8080/nonprofits/2/submissions -d '{"grantName": "Grant 3","requestedAmount": 3000,"awardedAmount": 3000,"grantType": "OPERATING_GRANT","tags": [ "a" ], "grantDuration": { "grantStart": "1/1/2024", "grantEnd": "15/1/2024" } }' -H "Content-Type: application/json" 

curl -XPUT http://localhost:8080/nonprofits/2/submissions/3 -d '{"grantName": "Grant 3","requestedAmount": 5000,"awardedAmount": 5000,"grantType": "OPERATING_GRANT","tags": [ "a" ], "grantDuration": { "grantStart": "1/1/2024", "grantEnd": "15/1/2024" } }' -H "Content-Type: application/json" 