"use client"
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const cardInfo = [
    {
        ksh: "ksh",
        price: "2,500",
        description: "per session",
        info: "Foundational and Basic Training",
        sessions: "2 months",
        services: [
            "Socialization",
            "Basic Obedience (sit, stay, come, down, and leave it)",
            "Handling and grooming",
            "House Training"
        ],
        button: "Get Started"
    },
    {
        ksh: "ksh",
        price: "2,500",
        description: "per session",
        info: "Intermediate Training",
        sessions: "5 months",
        services: [
            "Advanced obedience (heel, wait, place, recall, and distraction training)",
            "Impulse control",
            "Continued socialization",
            "Leash Training",
            "Kennel Manners"
        ],
        button: "Get Started"
    },
    {
        info: "Advanced Training",
        sessions: "10 months",
        services: [
            "Functional Obedience (Integrate obedience commands into daily routines and real life scenarios)",
            "Introduction To Protection Training",
            "Confidence Building",
            "Continued socialization and impulse control",
            "Advanced Protection Training (bitework, controlled aggression, and threat recognition)",
            "Real Life Scenario Training (simulate real life protection scenarios)",
            "Physical Conditioning"
        ],
        button: "Get Started"
    },
];

const Card = () => {
    return (
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
            {cardInfo.map((item, index) => (
                <div key={index} className="border relative border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900">
                    <div className="py-10">
                        <h3 className="text-xl font-bold pb-3">{item.info}</h3>
                        <p className="leading-6">{item.sessions}</p>
                    </div>
                    <ul className="pb-10 space-y-4">
                        {item.services.map((service, idx) => (
                            <li key={idx} className="flex items-center text-sm leading-6">
                                <FontAwesomeIcon
                                    icon={faBookmark}
                                    className="text-blue-500 text-xl mr-2 hover:text-blue-700"
                                />
                                {service}
                            </li>
                        ))}
                    </ul>
                    {/* <Link
                        href={`/form?info=${encodeURIComponent(item.info)}`}
                        className="mt-8 block rounded-lg bg-blue-500 px-6 py-4 text-center text-sm font-semibold leading-4 shadow-md hover:bg-blue-700">
                        {item.button}
                    </Link> */}
                </div>
            ))}
        </div>
    );
};

export default Card;
