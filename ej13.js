// Deep copy function using JSON methods
function safeCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const companyHierarchy = {
    name: 'Company',
    departments: [
        {
            name: 'Engineering',
            head: 'Alice',
            subDepartments: [
                {
                    name: 'Backend',
                    head: 'Bob',
                    employees: ['Charlie', 'David']
                },
                {
                    name: 'Frontend',
                    head: 'Eve',
                    employees: ['Frank', 'Grace']
                }
            ]
        },
        {
            name: 'Sales',
            head: 'Henry',
            employees: ['Isaac', 'Jane']
        }
    ]
};

const copiedHierarchy = safeCopy(companyHierarchy);

// Modify the copied hierarchy
copiedHierarchy.departments.push({
    name: 'Marketing',
    head: 'Karen',
    employees: ['Liam', 'Mia']
});

// Verify independence
console.log('Original Company Hierarchy:');
console.log(companyHierarchy);

console.log('Copied Company Hierarchy with Modifications:');
console.log(copiedHierarchy);
