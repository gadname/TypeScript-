//string型

const firstName: string = 'Michael';
const lastName: string = 'Jackson';
const fullName: string = `${firstName} ${lastName}`;

//number型
const age1: number = 20;
const age2: number = 0;
const weight: number = 60;
const latitude: number = -135;

const nan: number = 0 / 0;
const infinity: number = Infinity; // Fixed the spelling and value

//boolean型
const isOpen: boolean = true;
const disabled: boolean = false;
const id: string = '';
const hasId1: boolean = Boolean(id);
const hasId2: boolean = !id;

//配列型
const list1: number[] = [1, 2, 3]; // Changed the variable name
const list2: Array<number> = [1, 2, 3]; // Changed the variable name

//undefined型/null型
const noValue: undefined = undefined; // Fixed the spelling

//関数型
const sayHello: (name: string, q: boolean) => string = (name: string, q: boolean) => {
    return `Hello, ${name}${q ? '?' : '!'}`; // Adjusted the character
};
