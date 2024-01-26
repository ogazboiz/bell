import React from "react";

const Teammembercard = ({ name, role, email, image }) => {
	return (
		<div className="cardTeam">
			<img src={image} alt={name} className="teamMember" />
			<h3>{name}</h3>
			<p className="role">{role}</p>
			<span className="Blueline"></span>
			<p className="cardText">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
				necessitatibus quisquam architecto temporibus et unde sit illum,
				obcaecati totam eius cum illo ut repellendus modi quod atque distinctio
				iusto corrupti numquam! Nam quibusdam officia ea!
			</p>
			<p>
				<span className="teamMemberMail">{email}</span>
			</p>
		</div>
	);
};

export default Teammembercard;
