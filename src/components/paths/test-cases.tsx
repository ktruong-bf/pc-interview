import { Path } from "@/app/paths";
import { useEffect } from "react";
import { isEqual } from 'lodash';
import { classNames } from "../layouts/default/navigation-bar";

interface TestCasesProps {
    func: (paths: Path[]) => string[]
}

type Test = {
    id: number,
    name: string,
    description: string,
    input: Path[]
    expected: string[]
}

const tests: Test[] = [
    {
        id: 1,
        name: 'Case 1',
        description: `
            [
                { 
                    path: '/', 
                    children: [] 
                }
            ]
        `,
        input: [{ path: '/', children: [] }],
        expected: ['/']
    },
    {
        id: 2,
        name: 'Case 2',
        description: `
            [
                {
                    path: '/a',
                    children: [
                        {
                            path: '/b',
                            children: [
                                {
                                    path: '/c',
                                    children: []
                                },
                                {
                                    path: '/d',
                                    children: []
                                }
                            ]
                        },
                        {
                            path: '/e',
                            children: []
                        }
                    ]
                },
                {
                    path: '/f',
                    children: []
                },
                {
                    path: '/d',
                    children: [
                        {
                            path: '/e',
                            children: []
                        }
                    ]
                },
            ]
        `,
        input: [{"path":"/a","children":[{"path":"/b","children":[{"path":"/c","children":[]},{"path":"/d","children":[]}]},{"path":"/e","children":[]}]},{"path":"/f","children":[]},{"path":"/d","children":[{"path":"/e","children":[]}]}],
        expected: ["/a","/a/b","/a/b/c","/a/b/d","/a/e","/f","/d","/d/e"]
    }
];

const TestCases = ({ func }: TestCasesProps) => {    
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {tests.map((item) => {
                const passed = isEqual(func(item.input), item.expected);
                return (
                    <li key={item.id} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
        
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{item.name}</p>
        
                            <pre className="mt-1 text-sm leading-5 text-gray-500 m-2">
{`
Input:
${item.description}

Output:
${func(item.input).join('\n')}

Expected:
${item.expected.join('\n')}
`}

                            </pre>
        
                            <p className={classNames(
                                'mt-1 text-sm leading-5 text-gray-500',
                                passed ? 'text-green-500' : 'text-red-500'
                            )}>
                                Status: {passed ? 'Passed' : 'Failed'}
                            </p>
                        </div>
                    </div>
                </li>
            )
            })}
        </ul >
    );
}

export default TestCases;


/*
 {cases.map(case => {
                            
})}*/