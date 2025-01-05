const students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

const calculateAverage = (subjects) => {
    const scores = Object.values(subjects);
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
};

const result = Object.keys(students).reduce((acc, student) => {
    acc[student] = { average: calculateAverage(students[student]) };
    return acc;
}, {});

console.log(result);