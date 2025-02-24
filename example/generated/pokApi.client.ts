import type { AxiosResponse } from "axios";
import { getApiClient } from "./apiClient";
import type * as T from "./pokApi.schema";

/**
	 * Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see ability_listResponse200
	 */
export function abilityList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AbilityListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/ability/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.AbilityListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see ability_retrieveResponse200
 */
export function abilityRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.AbilityRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/ability/${data.id}/`;
	return apiClient.get<T.AbilityRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List berries
	 * Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see berry_listResponse200
	 */
export function berryList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.BerryListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/berry/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.BerryListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get a berry
 * Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see berry_retrieveResponse200
 */
export function berryRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.BerryRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/berry/${data.id}/`;
	return apiClient.get<T.BerryRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List berry firmness
	 * Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see berry_firmness_listResponse200
	 */
export function berryFirmnessList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.BerryFirmnessListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/berry-firmness/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.BerryFirmnessListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get berry by firmness
 * Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see berry_firmness_retrieveResponse200
 */
export function berryFirmnessRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.BerryFirmnessRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/berry-firmness/${data.id}/`;
	return apiClient.get<T.BerryFirmnessRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List berry flavors
	 * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see berry_flavor_listResponse200
	 */
export function berryFlavorList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.BerryFlavorListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/berry-flavor/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.BerryFlavorListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get berries by flavor
 * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see berry_flavor_retrieveResponse200
 */
export function berryFlavorRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.BerryFlavorRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/berry-flavor/${data.id}/`;
	return apiClient.get<T.BerryFlavorRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List charecterictics
	 * Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see characteristic_listResponse200
	 */
export function characteristicList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.CharacteristicListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/characteristic/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.CharacteristicListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get characteristic
 * Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see characteristic_retrieveResponse200
 */
export function characteristicRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.CharacteristicRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/characteristic/${data.id}/`;
	return apiClient.get<T.CharacteristicRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List contest types
	 * Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see contest_type_listResponse200
	 */
export function contestTypeList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ContestTypeListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/contest-type/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.ContestTypeListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get contest type
 * Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see contest_type_retrieveResponse200
 */
export function contestTypeRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ContestTypeRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/contest-type/${data.id}/`;
	return apiClient.get<T.ContestTypeRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List contest effects
	 * Contest effects refer to the effects of moves when used in contests.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see contest_effect_listResponse200
	 */
export function contestEffectList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ContestEffectListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/contest-effect/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.ContestEffectListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get contest effect
 * Contest effects refer to the effects of moves when used in contests.
 * @param params.id - This parameter can be a string or an integer.
 * @see contest_effect_retrieveResponse200
 */
export function contestEffectRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ContestEffectRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/contest-effect/${data.id}/`;
	return apiClient.get<T.ContestEffectRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List egg groups
	 * Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see egg_group_listResponse200
	 */
export function eggGroupList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.EggGroupListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/egg-group/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.EggGroupListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get egg group
 * Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see egg_group_retrieveResponse200
 */
export function eggGroupRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.EggGroupRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/egg-group/${data.id}/`;
	return apiClient.get<T.EggGroupRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List encounter methods
	 * Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see encounter_method_listResponse200
	 */
export function encounterMethodList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.EncounterMethodListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/encounter-method/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.EncounterMethodListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get encounter method
 * Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see encounter_method_retrieveResponse200
 */
export function encounterMethodRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.EncounterMethodRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/encounter-method/${data.id}/`;
	return apiClient.get<T.EncounterMethodRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List encounter conditions
	 * Conditions which affect what pokemon might appear in the wild, e.g., day or night.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see encounter_condition_listResponse200
	 */
export function encounterConditionList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.EncounterConditionListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/encounter-condition/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.EncounterConditionListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get encounter condition
 * Conditions which affect what pokemon might appear in the wild, e.g., day or night.
 * @param params.id - This parameter can be a string or an integer.
 * @see encounter_condition_retrieveResponse200
 */
export function encounterConditionRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.EncounterConditionRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/encounter-condition/${data.id}/`;
	return apiClient.get<T.EncounterConditionRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List encounter condition values
	 * Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see encounter_condition_value_listResponse200
	 */
export function encounterConditionValueList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.EncounterConditionValueListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/encounter-condition-value/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.EncounterConditionValueListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get encounter condition value
 * Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
 * @param params.id - This parameter can be a string or an integer.
 * @see encounter_condition_value_retrieveResponse200
 */
export function encounterConditionValueRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.EncounterConditionValueRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/encounter-condition-value/${data.id}/`;
	return apiClient.get<T.EncounterConditionValueRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List evolution chains
	 * Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see evolution_chain_listResponse200
	 */
export function evolutionChainList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.EvolutionChainListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/evolution-chain/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.EvolutionChainListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get evolution chain
 * Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
 * @param params.id - This parameter can be a string or an integer.
 * @see evolution_chain_retrieveResponse200
 */
export function evolutionChainRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.EvolutionChainRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/evolution-chain/${data.id}/`;
	return apiClient.get<T.EvolutionChainRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List evolution triggers
	 * Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see evolution_trigger_listResponse200
	 */
export function evolutionTriggerList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.EvolutionTriggerListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/evolution-trigger/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.EvolutionTriggerListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get evolution trigger
 * Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see evolution_trigger_retrieveResponse200
 */
export function evolutionTriggerRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.EvolutionTriggerRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/evolution-trigger/${data.id}/`;
	return apiClient.get<T.EvolutionTriggerRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List genrations
	 * A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see generation_listResponse200
	 */
export function generationList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.GenerationListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/generation/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GenerationListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get genration
 * A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
 * @param params.id - This parameter can be a string or an integer.
 * @see generation_retrieveResponse200
 */
export function generationRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.GenerationRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/generation/${data.id}/`;
	return apiClient.get<T.GenerationRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List genders
	 * Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see gender_listResponse200
	 */
export function genderList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.GenderListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/gender/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GenderListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get gender
 * Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see gender_retrieveResponse200
 */
export function genderRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.GenderRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/gender/${data.id}/`;
	return apiClient.get<T.GenderRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List growth rates
	 * Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see growth_rate_listResponse200
	 */
export function growthRateList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.GrowthRateListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/growth-rate/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GrowthRateListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get growth rate
 * Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see growth_rate_retrieveResponse200
 */
export function growthRateRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.GrowthRateRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/growth-rate/${data.id}/`;
	return apiClient.get<T.GrowthRateRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List items
	 * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see item_listResponse200
	 */
export function itemList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ItemListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/item/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.ItemListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get item
 * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
 * @param params.id - This parameter can be a string or an integer.
 * @see item_retrieveResponse200
 */
export function itemRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ItemRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/item/${data.id}/`;
	return apiClient.get<T.ItemRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List item categories
	 * Item categories determine where items will be placed in the players bag.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see item_category_listResponse200
	 */
export function itemCategoryList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ItemCategoryListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/item-category/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.ItemCategoryListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get item category
 * Item categories determine where items will be placed in the players bag.
 * @param params.id - This parameter can be a string or an integer.
 * @see item_category_retrieveResponse200
 */
export function itemCategoryRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ItemCategoryRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/item-category/${data.id}/`;
	return apiClient.get<T.ItemCategoryRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List item attributes
	 * Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see item_attribute_listResponse200
	 */
export function itemAttributeList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ItemAttributeListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/item-attribute/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.ItemAttributeListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get item attribute
 * Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".
 * @param params.id - This parameter can be a string or an integer.
 * @see item_attribute_retrieveResponse200
 */
export function itemAttributeRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ItemAttributeRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/item-attribute/${data.id}/`;
	return apiClient.get<T.ItemAttributeRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List item fling effects
	 * The various effects of the move"Fling" when used with different items.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see item_fling_effect_listResponse200
	 */
export function itemFlingEffectList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ItemFlingEffectListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/item-fling-effect/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.ItemFlingEffectListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get item fling effect
 * The various effects of the move"Fling" when used with different items.
 * @param params.id - This parameter can be a string or an integer.
 * @see item_fling_effect_retrieveResponse200
 */
export function itemFlingEffectRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ItemFlingEffectRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/item-fling-effect/${data.id}/`;
	return apiClient.get<T.ItemFlingEffectRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List item pockets
	 * Pockets within the players bag used for storing items by category.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see item_pocket_listResponse200
	 */
export function itemPocketList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ItemPocketListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/item-pocket/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.ItemPocketListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get item pocket
 * Pockets within the players bag used for storing items by category.
 * @param params.id - This parameter can be a string or an integer.
 * @see item_pocket_retrieveResponse200
 */
export function itemPocketRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.ItemPocketRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/item-pocket/${data.id}/`;
	return apiClient.get<T.ItemPocketRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List languages
	 * Languages for translations of API resource information.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see language_listResponse200
	 */
export function languageList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.LanguageListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/language/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.LanguageListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get language
 * Languages for translations of API resource information.
 * @param params.id - This parameter can be a string or an integer.
 * @see language_retrieveResponse200
 */
export function languageRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.LanguageRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/language/${data.id}/`;
	return apiClient.get<T.LanguageRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List locations
	 * Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see location_listResponse200
	 */
export function locationList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.LocationListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/location/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.LocationListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get location
 * Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
 * @param params.id - This parameter can be a string or an integer.
 * @see location_retrieveResponse200
 */
export function locationRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.LocationRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/location/${data.id}/`;
	return apiClient.get<T.LocationRetrieveResponse200>(url, {
		headers,
	});
}

/**
 * List location areas
 * Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
 * @param query.limit - Number of results to return per page.
 * @param query.offset - The initial index from which to return the results.
 * @see location_area_listResponse200
 */
export function locationAreaList(
	data: { limit?: number; offset?: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.LocationAreaListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/location-area/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
	};
	return apiClient.get<T.LocationAreaListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get location area
 * Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
 * @param params.id - A unique integer value identifying this location area.
 * @see location_area_retrieveResponse200
 */
export function locationAreaRetrieve(
	data: { id: number },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.LocationAreaRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/location-area/${data.id}/`;
	return apiClient.get<T.LocationAreaRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List machines
	 * Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see machine_listResponse200
	 */
export function machineList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MachineListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/machine/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.MachineListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get machine
 * Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
 * @param params.id - This parameter can be a string or an integer.
 * @see machine_retrieveResponse200
 */
export function machineRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MachineRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/machine/${data.id}/`;
	return apiClient.get<T.MachineRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List moves
	 * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see move_listResponse200
	 */
export function moveList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.MoveListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get move
 * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
 * @param params.id - This parameter can be a string or an integer.
 * @see move_retrieveResponse200
 */
export function moveRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move/${data.id}/`;
	return apiClient.get<T.MoveRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List move meta ailments
	 * Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see move_ailment_listResponse200
	 */
export function moveAilmentList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveAilmentListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move-ailment/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.MoveAilmentListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get move meta ailment
 * Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see move_ailment_retrieveResponse200
 */
export function moveAilmentRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveAilmentRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move-ailment/${data.id}/`;
	return apiClient.get<T.MoveAilmentRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List move battle styles
	 * Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see move_battle_style_listResponse200
	 */
export function moveBattleStyleList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveBattleStyleListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move-battle-style/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.MoveBattleStyleListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get move battle style
 * Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see move_battle_style_retrieveResponse200
 */
export function moveBattleStyleRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveBattleStyleRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move-battle-style/${data.id}/`;
	return apiClient.get<T.MoveBattleStyleRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List move meta categories
	 * Very general categories that loosely group move effects.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see move_category_listResponse200
	 */
export function moveCategoryList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveCategoryListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move-category/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.MoveCategoryListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get move meta category
 * Very general categories that loosely group move effects.
 * @param params.id - This parameter can be a string or an integer.
 * @see move_category_retrieveResponse200
 */
export function moveCategoryRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveCategoryRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move-category/${data.id}/`;
	return apiClient.get<T.MoveCategoryRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List move damage classes
	 * Damage classes moves can have, e.g. physical, special, or non-damaging.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see move_damage_class_listResponse200
	 */
export function moveDamageClassList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveDamageClassListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move-damage-class/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.MoveDamageClassListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get move damage class
 * Damage classes moves can have, e.g. physical, special, or non-damaging.
 * @param params.id - This parameter can be a string or an integer.
 * @see move_damage_class_retrieveResponse200
 */
export function moveDamageClassRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveDamageClassRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move-damage-class/${data.id}/`;
	return apiClient.get<T.MoveDamageClassRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List move learn methods
	 * Methods by which Pokémon can learn moves.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see move_learn_method_listResponse200
	 */
export function moveLearnMethodList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveLearnMethodListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move-learn-method/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.MoveLearnMethodListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get move learn method
 * Methods by which Pokémon can learn moves.
 * @param params.id - This parameter can be a string or an integer.
 * @see move_learn_method_retrieveResponse200
 */
export function moveLearnMethodRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveLearnMethodRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move-learn-method/${data.id}/`;
	return apiClient.get<T.MoveLearnMethodRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List move targets
	 * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see move_target_listResponse200
	 */
export function moveTargetList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveTargetListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move-target/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.MoveTargetListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get move target
 * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
 * @param params.id - This parameter can be a string or an integer.
 * @see move_target_retrieveResponse200
 */
export function moveTargetRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.MoveTargetRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move-target/${data.id}/`;
	return apiClient.get<T.MoveTargetRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List natures
	 * Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see nature_listResponse200
	 */
export function natureList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.NatureListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/nature/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.NatureListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get nature
 * Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see nature_retrieveResponse200
 */
export function natureRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.NatureRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/nature/${data.id}/`;
	return apiClient.get<T.NatureRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List pal park areas
	 * Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see pal_park_area_listResponse200
	 */
export function palParkAreaList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PalParkAreaListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pal-park-area/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.PalParkAreaListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get pal park area
 * Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.
 * @param params.id - This parameter can be a string or an integer.
 * @see pal_park_area_retrieveResponse200
 */
export function palParkAreaRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PalParkAreaRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pal-park-area/${data.id}/`;
	return apiClient.get<T.PalParkAreaRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List pokedex
	 * A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see pokedex_listResponse200
	 */
export function pokedexList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokedexListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokedex/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.PokedexListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get pokedex
 * A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see pokedex_retrieveResponse200
 */
export function pokedexRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokedexRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokedex/${data.id}/`;
	return apiClient.get<T.PokedexRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List pokemon
	 * Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see pokemon_listResponse200
	 */
export function pokemonList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokemon/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.PokemonListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get pokemon
 * Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see pokemon_retrieveResponse200
 */
export function pokemonRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon/${data.id}/`;
	return apiClient.get<T.PokemonRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List pokemon colors
	 * Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see pokemon_color_listResponse200
	 */
export function pokemonColorList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonColorListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokemon-color/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.PokemonColorListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get pokemon color
 * Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
 * @param params.id - This parameter can be a string or an integer.
 * @see pokemon_color_retrieveResponse200
 */
export function pokemonColorRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonColorRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon-color/${data.id}/`;
	return apiClient.get<T.PokemonColorRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List pokemon forms
	 * Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see pokemon_form_listResponse200
	 */
export function pokemonFormList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonFormListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokemon-form/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.PokemonFormListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get pokemon form
 * Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
 * @param params.id - This parameter can be a string or an integer.
 * @see pokemon_form_retrieveResponse200
 */
export function pokemonFormRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonFormRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon-form/${data.id}/`;
	return apiClient.get<T.PokemonFormRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List pokemom habitas
	 * Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see pokemon_habitat_listResponse200
	 */
export function pokemonHabitatList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonHabitatListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokemon-habitat/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.PokemonHabitatListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get pokemom habita
 * Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
 * @param params.id - This parameter can be a string or an integer.
 * @see pokemon_habitat_retrieveResponse200
 */
export function pokemonHabitatRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonHabitatRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon-habitat/${data.id}/`;
	return apiClient.get<T.PokemonHabitatRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List pokemon shapes
	 * Shapes used for sorting Pokémon in a Pokédex.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see pokemon_shape_listResponse200
	 */
export function pokemonShapeList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonShapeListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokemon-shape/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.PokemonShapeListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get pokemon shape
 * Shapes used for sorting Pokémon in a Pokédex.
 * @param params.id - This parameter can be a string or an integer.
 * @see pokemon_shape_retrieveResponse200
 */
export function pokemonShapeRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonShapeRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon-shape/${data.id}/`;
	return apiClient.get<T.PokemonShapeRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List pokemon species
	 * A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see pokemon_species_listResponse200
	 */
export function pokemonSpeciesList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonSpeciesListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokemon-species/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.PokemonSpeciesListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get pokemon species
 * A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
 * @param params.id - This parameter can be a string or an integer.
 * @see pokemon_species_retrieveResponse200
 */
export function pokemonSpeciesRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonSpeciesRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon-species/${data.id}/`;
	return apiClient.get<T.PokemonSpeciesRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List pokeathlon stats
	 * Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see pokeathlon_stat_listResponse200
	 */
export function pokeathlonStatList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokeathlonStatListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokeathlon-stat/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.PokeathlonStatListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get pokeathlon stat
 * Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see pokeathlon_stat_retrieveResponse200
 */
export function pokeathlonStatRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokeathlonStatRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokeathlon-stat/${data.id}/`;
	return apiClient.get<T.PokeathlonStatRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List regions
	 * A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see region_listResponse200
	 */
export function regionList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.RegionListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/region/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.RegionListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get region
 * A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
 * @param params.id - This parameter can be a string or an integer.
 * @see region_retrieveResponse200
 */
export function regionRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.RegionRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/region/${data.id}/`;
	return apiClient.get<T.RegionRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List stats
	 * Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see stat_listResponse200
	 */
export function statList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StatListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/stat/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.StatListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get stat
 * Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
 * @param params.id - This parameter can be a string or an integer.
 * @see stat_retrieveResponse200
 */
export function statRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.StatRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/stat/${data.id}/`;
	return apiClient.get<T.StatRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List super contest effects
	 * Super contest effects refer to the effects of moves when used in super contests.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see super_contest_effect_listResponse200
	 */
export function superContestEffectList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SuperContestEffectListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/super-contest-effect/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.SuperContestEffectListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get super contest effect
 * Super contest effects refer to the effects of moves when used in super contests.
 * @param params.id - This parameter can be a string or an integer.
 * @see super_contest_effect_retrieveResponse200
 */
export function superContestEffectRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.SuperContestEffectRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/super-contest-effect/${data.id}/`;
	return apiClient.get<T.SuperContestEffectRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List types
	 * Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see type_listResponse200
	 */
export function typeList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.TypeListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/type/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.TypeListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get types
 * Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
 * @param params.id - This parameter can be a string or an integer.
 * @see type_retrieveResponse200
 */
export function typeRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.TypeRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/type/${data.id}/`;
	return apiClient.get<T.TypeRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List versions
	 * Versions of the games, e.g., Red, Blue or Yellow.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see version_listResponse200
	 */
export function versionList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.VersionListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/version/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.VersionListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get version
 * Versions of the games, e.g., Red, Blue or Yellow.
 * @param params.id - This parameter can be a string or an integer.
 * @see version_retrieveResponse200
 */
export function versionRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.VersionRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/version/${data.id}/`;
	return apiClient.get<T.VersionRetrieveResponse200>(url, {
		headers,
	});
}

/**
	 * List version groups
	 * Version groups categorize highly similar versions of the games.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see version_group_listResponse200
	 */
export function versionGroupList(
	data: { limit?: number; offset?: number; q?: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.VersionGroupListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/version-group/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.VersionGroupListResponse200>(url, {
		params: queryData,

		headers,
	});
}

/**
 * Get version group
 * Version groups categorize highly similar versions of the games.
 * @param params.id - This parameter can be a string or an integer.
 * @see version_group_retrieveResponse200
 */
export function versionGroupRetrieve(
	data: { id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.VersionGroupRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/version-group/${data.id}/`;
	return apiClient.get<T.VersionGroupRetrieveResponse200>(url, {
		headers,
	});
}

/**
 * Get pokemon encounter
 * Handles Pokemon Encounters as a sub-resource.
 * @param params.pokemon_id
 * @see pokemon_encounters_retrieveResponse200
 */
export function pokemonEncountersRetrieve(
	data: { pokemon_id: string },
	headers?: Record<string, string>
): Promise<AxiosResponse<T.PokemonEncountersRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon/${data.pokemon_id}/encounters`;
	return apiClient.get<T.PokemonEncountersRetrieveResponse200>(url, {
		headers,
	});
}
