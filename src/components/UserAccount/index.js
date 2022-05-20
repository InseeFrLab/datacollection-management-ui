import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const UserAccount = () => {
	const [name, setName] = React.useState("john@doe.com");
	const handleChange = (event) => {
		setName(event.target.value);
	};
	return (
		<>
			<div>
				Pour bénéficier pleinement des services proposés sur ce portail, pensez
				à renseigner ou à mettre à jour régulièrement vos données personnelles.
				Si vous choisissez par exemple de renseigner votre adresse de
				messagerie, vous pourrez recevoir votre nouveau mot de passe par
				courriel dans les minutes qui suivent votre demande de réinitialisation.
			</div>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<h3>Mon compte - Accès</h3>
				<TextField
					id="outlined-name"
					label="Adresse de messagerie"
					value={name}
					onChange={handleChange}
				/>
				<Button>Modifier</Button>
			</Box>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<h3>Gérer mes identifiants de connexion</h3>
				<Button>Liste des enquêtes liées à mon compte</Button>
				<Button>Autres enquêtes liées à mon adresse de messagerie</Button>
				<Button>
					Vous avez reçu un nouveau compte que vous souhaitez associer au compte
					?
				</Button>
			</Box>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<h3>Mes infos personnelles</h3>
				<TextField
					id="outlined-name"
					label="Nom"
					value={"Doe"}
					onChange={handleChange}
				/>
				<TextField
					id="outlined-name"
					label="Prénom"
					value={"John"}
					onChange={handleChange}
				/>
				<TextField
					id="outlined-name"
					label="Fonction"
					value={"name"}
					onChange={handleChange}
				/>
				<TextField
					id="outlined-name"
					label="Téléphone"
					value={"0101010101"}
					onChange={handleChange}
				/>
				<Button>Modifier</Button>
			</Box>
		</>
	);
};
