# for login and signup

- Signup

url = axios.post(`${process.env.REACT_APP_URL}/user/signup`, body)

- login

url = axios.post(`${process.env.REACT_APP_URL}/user/login`, body)

# for product_page

- queries will come as per the requirement

### category => filter by category =>

- query => ?category=${category}
- from the frontend, onClick =>{()=> handle(" category will be here as per the page ")}

### q => filter by input serach (for debouncing & throttling) =>

- query => ?category=${category}&q=${q}
- from the frontend, onClick =>{()=> handle(input)} => input which is coming form state

### sort => sorting by price1 ( "asc" , "desc") =>

- query ==> ?category=${category}&sort=${"asc" or "desc"}
- from the frontend, onClick =>{()=> handleSort("asc" or "desc")}

### arr => price b/w two number (i.e. gte 20 and lt 1000) =>

- query ==> ?category=${category}&arr=${arr}
- from the frontend, onClick =>{()=> handleSort("20,1000")}

### off => sorting by %off ("asc" , "desc")

- query ==> ?category=${category}&off=${asc or desc}
- from the frontend, onClick =>{()=> handleSort("asc" or "desc")}

### offSet => %discount b/w two number (i.e. gte 10 and lt 35) => query

- query ==> ?category=${category}&offSet=${offSet}
- from the frontend, onClick =>{()=> handle("10,35")}

### firstLetter => filter by first letter (in medicine category)

- query ==> ?category=${category}&firstLetter=${firstLetter}
- from the frontend, onClick =>{()=> handle("A/B/C/D.... => as per the state")}

# USE ONLY ONE URL i.e. ONLY ONE API IN PRODUCT ACTION

url = axios.get(`${process.env.REACT_APP_URL}/product?category=${category}&q=${q}&sort=${sort}&arr=${arr}&off=${off}&offSet=${offSet}&firstLetter=${firstLetter}&page=${page}&limit=${limit}`)

- please change the query in the dispatch function from frontend,

### URL, POST, SECRET_KEY


## categories


@Masai Ujjwal  "category":"healthPackages", @Masai Ujjwal   "category": "labtest",   "category": "ayurvedic",    "category": "babycare",     "category": "diabetes",      "category": "disinfactents",    "category": "healthcareDevices",      "category": "healthFood",         "category": "immunity",        "category": "medicine",       "category": "sale",  @Masai Saroj  this is sale cat.  ,    "category": "mens",       "category": "skincare",        "category": "stomach",