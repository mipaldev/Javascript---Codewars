// const isSquare = n => Number.isInteger(Math.sqrt(n));
// // const isSquare = n => n == parseInt(Math.sqrt(n)) ** 2;


// console.log(isSquare(25));



function isPerfectSquare(num) {
    const root = Math.sqrt(num);
    return root === Math.floor(root);
}

function generateSquareSums(N, permutation, visited) {
    if (permutation.length === N) {
        return permutation;
    }

    for (let i = 1; i <= N; i++) {
        if (!visited[i]) {
            if (permutation.length === 0 || isPerfectSquare(permutation[permutation.length - 1] + i)) {
                visited[i] = true;
                const result = generateSquareSums(N, [...permutation, i], visited);
                if (result) {
                    return result;
                }
                visited[i] = false;
            }
        }
    }

    return false;
}

function squareSums(N) {
    const permutation = [];
    const visited = Array(N + 1).fill(false);
    return generateSquareSums(N, permutation, visited);
}

const N = 15;
const result = squareSums(N);
console.log(result);
