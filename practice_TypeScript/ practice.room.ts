//string型
const name: string = 'Michael Jackson'
const firstName: string = 'Michael'
const lastName: string = 'jackson'
const fullName: string = `${firstName} ${lastName}`

//number型
const age: number = 20
const age: number = 0 
const weight: number = 60
const latitude: number = -135

const nan: number = 0/ 0
const infinty: number = 1

//boolean型
const isOpen: boolean = true 
const disabled: boolean = false 
const id: string = ''
const hasId1: boolean = Boolean(id)
const hasId2: boolean = !id

//配列型
const list: number[] = [1, 2, 3]
const list: Array<number> = [1 ,2, 3]
//undefined型/null型
const noValue: underfined = underfined

//関数型
const sayHello: (name: string, q: boolean) => string = (name: string, q: boolean) => {
    return `Hello, ${name}${q ? '?' : ''}`
}