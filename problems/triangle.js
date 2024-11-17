class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths() {
        
        let sum1 = this.side1 + this.side2;
        let sum2 = this.side2 + this.side3;
        let sum3 = this.side3 + this.side1;

        if (sum1 > this.side3 && sum2 > this.side1 && sum3 > this.side2) {
            return true;
        }

        return false;
    }

    validate() {

        if(this.hasValidSideLengths()) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    static getValidTriangles(...triangles) {
        
        let validTriangles = [];

        triangles.forEach(triangle => {
            if (triangle.hasValidSideLengths()) {
                validTriangles.push(triangle);
            }
        });

        return validTriangles;
    }


}

class Scalene extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);

        //this.isValidTriangle = isValidTriangle;

        if (this.hasValidSideLengths()) {
            this.isValidTriangle = true;
        } else {
            this.isValidTriangle = false;
        }
    }

    isScalene() {
        if (this.side1 === this.side2 === this.side3) {
            return false;
        } else if(this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
            return false;
        }

        return true;
    }

    validate() {
        if(this.isScalene()) {
            this.isValidScalene = true;
        } else {
            this.isValidScalene = false;
        }
    }
}

class Isosceles extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);

        if(this.hasValidSideLengths()) {
            this.isValidTriangle = true;
        } else {
            this.isValidTriangle = false;
        }
    }

    isIsosceles() {

        if(this.side1 === this.side2 && this.side1 === this.side3 && this.side2 === this.side3) {
            return false;
        } else if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3) {
            return true;
        }

        return false;
    }

    validate() {
        if(this.isIsosceles()) {
            this.isValidIsosceles = true;
        } else {
            this.isValidIsosceles = false;
        }
    }
}

// class Equilateral extends Triangle {
//     //
// }

// console.log("Before .validate() is called");
// console.log("===============================");

// const triangle = new Triangle(3, 4, 2);
// console.log(triangle);
// //console.log("===============================");
// console.log();

// console.log("After .validate() is called");
// console.log("===============================");

// triangle.validate();
// console.log(triangle);

// const scale = new Scalene(4, 1, 10);

//console.log(scale);

/*************************************** */
export {
    Triangle,
    Scalene,
    Isosceles
};

