import { routes } from "core/properties";

export const getRouteLabel = (route) =>
	routes.filter((r) => r.id === route.pathname.split("/")[2])[0].label;
