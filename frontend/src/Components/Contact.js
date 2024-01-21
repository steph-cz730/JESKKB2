import React from "react";

const Contact = () => {
    const teamMembers = [
        { name: "Stephanie Czajkowski", email: "stephanie.e.czajkowski@gmail.com" },
        { name: "Ken Harris", email: "kenn.harris83@gmail.com" },
        { name: "Bryanna Sanchez", email: "bryannasanchez12@gmail.com" },
        { name: "Kristen Scheffler", email: "kris10ben10@gmail.com" },
    ];

return (
    <section>
        <h2>Contact Our Team!</h2>
        <div className="team-contact">
        {teamMembers.map((member, index) => (
        <div key={index} className="team-member-contact">
            <h3>{member.name}</h3>
            <p>Email: {member.email}</p>
        </div>
        ))}
        </div>
    </section>
    );
};

export default Contact;
