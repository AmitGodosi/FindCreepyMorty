import { axiosInstance } from "../config";

export const fetchLocationData = async () => {
	try {
		const { data: locationData } = await axiosInstance.get(
			'location/?name=Earth (C-137)'
		);
		const { results } = locationData || [];
		return results?.[0]
	} catch (error) {
		return error
	}
};

export const fetchCharactersData = async () => {
	try {
		const { data: locationData } = await axiosInstance.get(
			'location/?name=Earth (C-137)'
		);
		const { results } = locationData || [];
		return results?.[0]
	} catch (error) {
		return error
	}
};

