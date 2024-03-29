import React from 'react';

const BulletList = ({ items }) => {
    return (
        <>
            {items?.map((item, i) => (
                <ul
                    key={i}
                    className="list-disc pl-6 marker:text-gray-300 dark:marker:text-gray-600"
                >
                    <li className="pl-2">{item}</li>
                </ul>
            ))}
        </>
    );
};

export default BulletList;
