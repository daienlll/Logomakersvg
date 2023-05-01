const inquirer = require("inquirer");

const fs = require("fs");

const { Triangle, Square, Circle } = require("./lib/shapes");

function writeToFile(fileName, answers) {
    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle(answers.shapeBackgroundColor);
    } else if (answers.shape === "Square") {
        shapeChoice = new Square(answers.shapeBackgroundColor);
    } else {
        shapeChoice = new Circle(answers.shapeBackgroundColor);
    }

    let logoString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>${answers.shape}${shapeChoice.render()}<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text></g></svg>`;
    
    console.log(logoString)
    
    fs.writeFile(fileName, logoString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                message:
                    "Please enter upto three characters to form your logo!",
                name: "text",
            },
            {
                type: "input",
                message:
                    "please enter a color keyword OR a hexadecimal number to choose your text color!",
                name: "textColor",
            },
            {
                type: "list",
                message: "please choose either Triangle, Circle, or Square for your logo's shape!",
                choices: ["Triangle", "Square", "Circle"],
                name: "shape",
            },
            {
                type: "input",
                message:
                    "please enter a color keyword OR a hexadecimal number to choose your shape's color!",
                name: "shapeBackgroundColor",
            },
        ])

        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("You must ener three characters!");
                promptUser();
            } else if (!["Triangle", "Square", "Circle"].includes(answers.shape)) {
                console.log("You must shoose between Triangle, Circle, or Square!");
                promptUser()
            } else {
                writeToFile("logo.svg", answers);
            };
        });
}
promptUser();