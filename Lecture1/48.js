//function inside function

const app = () => {
    const myfun = () => {
        console.log("hello my fun");
    }

    const add = (n1, n2) => {
        return n1 + n2;
    }

    const mul = (n1, n2) => n1*n2;
    myfun();
    console.log(add(8,6));
    console.log(mul(2,4));
}
app();