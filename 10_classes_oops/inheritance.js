class User{
    constructor(username){
        this.username= username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password

    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const main = new Teacher("Amit","amit@gmail.com","123")
main.addCourse()


const main1 = new User("main1")
// masalaChai.addCourse()// access nhi hai
// main1.logMe()

// console.log(main instanceof User)  //true