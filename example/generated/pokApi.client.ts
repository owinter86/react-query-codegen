import type { AxiosRequestConfig, AxiosResponse } from "axios";
import { getApiClient } from "./apiClient";
import type * as T from "./pokApi.schema";

/**
	 * Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getability_listResponse200
	 */
export function getabilityList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetabilityListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/ability/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetabilityListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getability_retrieveResponse200
 */
export function getabilityRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetabilityRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/ability/${data.id}/`;
	return apiClient.get<T.GetabilityRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List berries
	 * Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getberry_listResponse200
	 */
export function getberryList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetberryListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/berry/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetberryListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get a berry
 * Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getberry_retrieveResponse200
 */
export function getberryRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetberryRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/berry/${data.id}/`;
	return apiClient.get<T.GetberryRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List berry firmness
	 * Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getberry_firmness_listResponse200
	 */
export function getberryFirmnessList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetberryFirmnessListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/berry-firmness/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetberryFirmnessListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get berry by firmness
 * Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getberry_firmness_retrieveResponse200
 */
export function getberryFirmnessRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetberryFirmnessRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/berry-firmness/${data.id}/`;
	return apiClient.get<T.GetberryFirmnessRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List berry flavors
	 * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getberry_flavor_listResponse200
	 */
export function getberryFlavorList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetberryFlavorListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/berry-flavor/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetberryFlavorListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get berries by flavor
 * Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getberry_flavor_retrieveResponse200
 */
export function getberryFlavorRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetberryFlavorRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/berry-flavor/${data.id}/`;
	return apiClient.get<T.GetberryFlavorRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List charecterictics
	 * Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getcharacteristic_listResponse200
	 */
export function getcharacteristicList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetcharacteristicListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/characteristic/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetcharacteristicListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get characteristic
 * Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getcharacteristic_retrieveResponse200
 */
export function getcharacteristicRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetcharacteristicRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/characteristic/${data.id}/`;
	return apiClient.get<T.GetcharacteristicRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List contest types
	 * Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getcontest_type_listResponse200
	 */
export function getcontestTypeList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetcontestTypeListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/contest-type/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetcontestTypeListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get contest type
 * Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getcontest_type_retrieveResponse200
 */
export function getcontestTypeRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetcontestTypeRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/contest-type/${data.id}/`;
	return apiClient.get<T.GetcontestTypeRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List contest effects
	 * Contest effects refer to the effects of moves when used in contests.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getcontest_effect_listResponse200
	 */
export function getcontestEffectList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetcontestEffectListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/contest-effect/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetcontestEffectListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get contest effect
 * Contest effects refer to the effects of moves when used in contests.
 * @param params.id - This parameter can be a string or an integer.
 * @see getcontest_effect_retrieveResponse200
 */
export function getcontestEffectRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetcontestEffectRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/contest-effect/${data.id}/`;
	return apiClient.get<T.GetcontestEffectRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List egg groups
	 * Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getegg_group_listResponse200
	 */
export function geteggGroupList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GeteggGroupListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/egg-group/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GeteggGroupListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get egg group
 * Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getegg_group_retrieveResponse200
 */
export function geteggGroupRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GeteggGroupRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/egg-group/${data.id}/`;
	return apiClient.get<T.GeteggGroupRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List encounter methods
	 * Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getencounter_method_listResponse200
	 */
export function getencounterMethodList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetencounterMethodListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/encounter-method/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetencounterMethodListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get encounter method
 * Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getencounter_method_retrieveResponse200
 */
export function getencounterMethodRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetencounterMethodRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/encounter-method/${data.id}/`;
	return apiClient.get<T.GetencounterMethodRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List encounter conditions
	 * Conditions which affect what pokemon might appear in the wild, e.g., day or night.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getencounter_condition_listResponse200
	 */
export function getencounterConditionList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetencounterConditionListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/encounter-condition/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetencounterConditionListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get encounter condition
 * Conditions which affect what pokemon might appear in the wild, e.g., day or night.
 * @param params.id - This parameter can be a string or an integer.
 * @see getencounter_condition_retrieveResponse200
 */
export function getencounterConditionRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetencounterConditionRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/encounter-condition/${data.id}/`;
	return apiClient.get<T.GetencounterConditionRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List encounter condition values
	 * Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getencounter_condition_value_listResponse200
	 */
export function getencounterConditionValueList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetencounterConditionValueListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/encounter-condition-value/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetencounterConditionValueListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get encounter condition value
 * Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
 * @param params.id - This parameter can be a string or an integer.
 * @see getencounter_condition_value_retrieveResponse200
 */
export function getencounterConditionValueRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetencounterConditionValueRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/encounter-condition-value/${data.id}/`;
	return apiClient.get<T.GetencounterConditionValueRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List evolution chains
	 * Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getevolution_chain_listResponse200
	 */
export function getevolutionChainList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetevolutionChainListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/evolution-chain/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetevolutionChainListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get evolution chain
 * Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
 * @param params.id - This parameter can be a string or an integer.
 * @see getevolution_chain_retrieveResponse200
 */
export function getevolutionChainRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetevolutionChainRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/evolution-chain/${data.id}/`;
	return apiClient.get<T.GetevolutionChainRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List evolution triggers
	 * Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getevolution_trigger_listResponse200
	 */
export function getevolutionTriggerList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetevolutionTriggerListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/evolution-trigger/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetevolutionTriggerListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get evolution trigger
 * Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getevolution_trigger_retrieveResponse200
 */
export function getevolutionTriggerRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetevolutionTriggerRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/evolution-trigger/${data.id}/`;
	return apiClient.get<T.GetevolutionTriggerRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List genrations
	 * A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getgeneration_listResponse200
	 */
export function getgenerationList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetgenerationListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/generation/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetgenerationListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get genration
 * A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.
 * @param params.id - This parameter can be a string or an integer.
 * @see getgeneration_retrieveResponse200
 */
export function getgenerationRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetgenerationRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/generation/${data.id}/`;
	return apiClient.get<T.GetgenerationRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List genders
	 * Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getgender_listResponse200
	 */
export function getgenderList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetgenderListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/gender/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetgenderListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get gender
 * Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getgender_retrieveResponse200
 */
export function getgenderRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetgenderRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/gender/${data.id}/`;
	return apiClient.get<T.GetgenderRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List growth rates
	 * Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getgrowth_rate_listResponse200
	 */
export function getgrowthRateList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetgrowthRateListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/growth-rate/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetgrowthRateListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get growth rate
 * Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getgrowth_rate_retrieveResponse200
 */
export function getgrowthRateRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetgrowthRateRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/growth-rate/${data.id}/`;
	return apiClient.get<T.GetgrowthRateRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List items
	 * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getitem_listResponse200
	 */
export function getitemList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetitemListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/item/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetitemListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get item
 * An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.
 * @param params.id - This parameter can be a string or an integer.
 * @see getitem_retrieveResponse200
 */
export function getitemRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetitemRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/item/${data.id}/`;
	return apiClient.get<T.GetitemRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List item categories
	 * Item categories determine where items will be placed in the players bag.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getitem_category_listResponse200
	 */
export function getitemCategoryList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetitemCategoryListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/item-category/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetitemCategoryListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get item category
 * Item categories determine where items will be placed in the players bag.
 * @param params.id - This parameter can be a string or an integer.
 * @see getitem_category_retrieveResponse200
 */
export function getitemCategoryRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetitemCategoryRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/item-category/${data.id}/`;
	return apiClient.get<T.GetitemCategoryRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List item attributes
	 * Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getitem_attribute_listResponse200
	 */
export function getitemAttributeList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetitemAttributeListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/item-attribute/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetitemAttributeListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get item attribute
 * Item attributes define particular aspects of items, e.g."usable in battle" or "consumable".
 * @param params.id - This parameter can be a string or an integer.
 * @see getitem_attribute_retrieveResponse200
 */
export function getitemAttributeRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetitemAttributeRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/item-attribute/${data.id}/`;
	return apiClient.get<T.GetitemAttributeRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List item fling effects
	 * The various effects of the move"Fling" when used with different items.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getitem_fling_effect_listResponse200
	 */
export function getitemFlingEffectList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetitemFlingEffectListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/item-fling-effect/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetitemFlingEffectListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get item fling effect
 * The various effects of the move"Fling" when used with different items.
 * @param params.id - This parameter can be a string or an integer.
 * @see getitem_fling_effect_retrieveResponse200
 */
export function getitemFlingEffectRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetitemFlingEffectRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/item-fling-effect/${data.id}/`;
	return apiClient.get<T.GetitemFlingEffectRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List item pockets
	 * Pockets within the players bag used for storing items by category.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getitem_pocket_listResponse200
	 */
export function getitemPocketList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetitemPocketListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/item-pocket/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetitemPocketListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get item pocket
 * Pockets within the players bag used for storing items by category.
 * @param params.id - This parameter can be a string or an integer.
 * @see getitem_pocket_retrieveResponse200
 */
export function getitemPocketRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetitemPocketRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/item-pocket/${data.id}/`;
	return apiClient.get<T.GetitemPocketRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List languages
	 * Languages for translations of API resource information.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getlanguage_listResponse200
	 */
export function getlanguageList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetlanguageListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/language/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetlanguageListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get language
 * Languages for translations of API resource information.
 * @param params.id - This parameter can be a string or an integer.
 * @see getlanguage_retrieveResponse200
 */
export function getlanguageRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetlanguageRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/language/${data.id}/`;
	return apiClient.get<T.GetlanguageRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List locations
	 * Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getlocation_listResponse200
	 */
export function getlocationList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetlocationListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/location/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetlocationListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get location
 * Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
 * @param params.id - This parameter can be a string or an integer.
 * @see getlocation_retrieveResponse200
 */
export function getlocationRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetlocationRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/location/${data.id}/`;
	return apiClient.get<T.GetlocationRetrieveResponse200>(url, {
		...config,
	});
}

/**
 * List location areas
 * Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
 * @param query.limit - Number of results to return per page.
 * @param query.offset - The initial index from which to return the results.
 * @see getlocation_area_listResponse200
 */
export function getlocationAreaList(
	data: { limit?: number; offset?: number },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetlocationAreaListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/location-area/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
	};
	return apiClient.get<T.GetlocationAreaListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get location area
 * Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
 * @param params.id - A unique integer value identifying this location area.
 * @see getlocation_area_retrieveResponse200
 */
export function getlocationAreaRetrieve(
	data: { id: number },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetlocationAreaRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/location-area/${data.id}/`;
	return apiClient.get<T.GetlocationAreaRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List machines
	 * Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getmachine_listResponse200
	 */
export function getmachineList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmachineListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/machine/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetmachineListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get machine
 * Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
 * @param params.id - This parameter can be a string or an integer.
 * @see getmachine_retrieveResponse200
 */
export function getmachineRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmachineRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/machine/${data.id}/`;
	return apiClient.get<T.GetmachineRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List moves
	 * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getmove_listResponse200
	 */
export function getmoveList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetmoveListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get move
 * Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.
 * @param params.id - This parameter can be a string or an integer.
 * @see getmove_retrieveResponse200
 */
export function getmoveRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move/${data.id}/`;
	return apiClient.get<T.GetmoveRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List move meta ailments
	 * Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getmove_ailment_listResponse200
	 */
export function getmoveAilmentList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveAilmentListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move-ailment/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetmoveAilmentListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get move meta ailment
 * Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getmove_ailment_retrieveResponse200
 */
export function getmoveAilmentRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveAilmentRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move-ailment/${data.id}/`;
	return apiClient.get<T.GetmoveAilmentRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List move battle styles
	 * Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getmove_battle_style_listResponse200
	 */
export function getmoveBattleStyleList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveBattleStyleListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move-battle-style/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetmoveBattleStyleListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get move battle style
 * Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getmove_battle_style_retrieveResponse200
 */
export function getmoveBattleStyleRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveBattleStyleRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move-battle-style/${data.id}/`;
	return apiClient.get<T.GetmoveBattleStyleRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List move meta categories
	 * Very general categories that loosely group move effects.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getmove_category_listResponse200
	 */
export function getmoveCategoryList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveCategoryListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move-category/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetmoveCategoryListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get move meta category
 * Very general categories that loosely group move effects.
 * @param params.id - This parameter can be a string or an integer.
 * @see getmove_category_retrieveResponse200
 */
export function getmoveCategoryRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveCategoryRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move-category/${data.id}/`;
	return apiClient.get<T.GetmoveCategoryRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List move damage classes
	 * Damage classes moves can have, e.g. physical, special, or non-damaging.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getmove_damage_class_listResponse200
	 */
export function getmoveDamageClassList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveDamageClassListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move-damage-class/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetmoveDamageClassListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get move damage class
 * Damage classes moves can have, e.g. physical, special, or non-damaging.
 * @param params.id - This parameter can be a string or an integer.
 * @see getmove_damage_class_retrieveResponse200
 */
export function getmoveDamageClassRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveDamageClassRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move-damage-class/${data.id}/`;
	return apiClient.get<T.GetmoveDamageClassRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List move learn methods
	 * Methods by which Pokémon can learn moves.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getmove_learn_method_listResponse200
	 */
export function getmoveLearnMethodList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveLearnMethodListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move-learn-method/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetmoveLearnMethodListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get move learn method
 * Methods by which Pokémon can learn moves.
 * @param params.id - This parameter can be a string or an integer.
 * @see getmove_learn_method_retrieveResponse200
 */
export function getmoveLearnMethodRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveLearnMethodRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move-learn-method/${data.id}/`;
	return apiClient.get<T.GetmoveLearnMethodRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List move targets
	 * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getmove_target_listResponse200
	 */
export function getmoveTargetList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveTargetListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/move-target/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetmoveTargetListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get move target
 * Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
 * @param params.id - This parameter can be a string or an integer.
 * @see getmove_target_retrieveResponse200
 */
export function getmoveTargetRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetmoveTargetRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/move-target/${data.id}/`;
	return apiClient.get<T.GetmoveTargetRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List natures
	 * Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getnature_listResponse200
	 */
export function getnatureList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetnatureListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/nature/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetnatureListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get nature
 * Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getnature_retrieveResponse200
 */
export function getnatureRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetnatureRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/nature/${data.id}/`;
	return apiClient.get<T.GetnatureRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List pal park areas
	 * Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getpal_park_area_listResponse200
	 */
export function getpalParkAreaList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpalParkAreaListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pal-park-area/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetpalParkAreaListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get pal park area
 * Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.
 * @param params.id - This parameter can be a string or an integer.
 * @see getpal_park_area_retrieveResponse200
 */
export function getpalParkAreaRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpalParkAreaRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pal-park-area/${data.id}/`;
	return apiClient.get<T.GetpalParkAreaRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List pokedex
	 * A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getpokedex_listResponse200
	 */
export function getpokedexList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokedexListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokedex/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetpokedexListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get pokedex
 * A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getpokedex_retrieveResponse200
 */
export function getpokedexRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokedexRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokedex/${data.id}/`;
	return apiClient.get<T.GetpokedexRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List pokemon
	 * Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getpokemon_listResponse200
	 */
export function getpokemonList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokemon/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetpokemonListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get pokemon
 * Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getpokemon_retrieveResponse200
 */
export function getpokemonRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon/${data.id}/`;
	return apiClient.get<T.GetpokemonRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List pokemon colors
	 * Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getpokemon_color_listResponse200
	 */
export function getpokemonColorList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonColorListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokemon-color/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetpokemonColorListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get pokemon color
 * Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
 * @param params.id - This parameter can be a string or an integer.
 * @see getpokemon_color_retrieveResponse200
 */
export function getpokemonColorRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonColorRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon-color/${data.id}/`;
	return apiClient.get<T.GetpokemonColorRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List pokemon forms
	 * Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getpokemon_form_listResponse200
	 */
export function getpokemonFormList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonFormListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokemon-form/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetpokemonFormListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get pokemon form
 * Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
 * @param params.id - This parameter can be a string or an integer.
 * @see getpokemon_form_retrieveResponse200
 */
export function getpokemonFormRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonFormRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon-form/${data.id}/`;
	return apiClient.get<T.GetpokemonFormRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List pokemom habitas
	 * Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getpokemon_habitat_listResponse200
	 */
export function getpokemonHabitatList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonHabitatListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokemon-habitat/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetpokemonHabitatListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get pokemom habita
 * Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
 * @param params.id - This parameter can be a string or an integer.
 * @see getpokemon_habitat_retrieveResponse200
 */
export function getpokemonHabitatRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonHabitatRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon-habitat/${data.id}/`;
	return apiClient.get<T.GetpokemonHabitatRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List pokemon shapes
	 * Shapes used for sorting Pokémon in a Pokédex.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getpokemon_shape_listResponse200
	 */
export function getpokemonShapeList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonShapeListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokemon-shape/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetpokemonShapeListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get pokemon shape
 * Shapes used for sorting Pokémon in a Pokédex.
 * @param params.id - This parameter can be a string or an integer.
 * @see getpokemon_shape_retrieveResponse200
 */
export function getpokemonShapeRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonShapeRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon-shape/${data.id}/`;
	return apiClient.get<T.GetpokemonShapeRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List pokemon species
	 * A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getpokemon_species_listResponse200
	 */
export function getpokemonSpeciesList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonSpeciesListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokemon-species/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetpokemonSpeciesListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get pokemon species
 * A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
 * @param params.id - This parameter can be a string or an integer.
 * @see getpokemon_species_retrieveResponse200
 */
export function getpokemonSpeciesRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonSpeciesRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon-species/${data.id}/`;
	return apiClient.get<T.GetpokemonSpeciesRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List pokeathlon stats
	 * Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getpokeathlon_stat_listResponse200
	 */
export function getpokeathlonStatList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokeathlonStatListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/pokeathlon-stat/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetpokeathlonStatListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get pokeathlon stat
 * Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.
 * @param params.id - This parameter can be a string or an integer.
 * @see getpokeathlon_stat_retrieveResponse200
 */
export function getpokeathlonStatRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokeathlonStatRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokeathlon-stat/${data.id}/`;
	return apiClient.get<T.GetpokeathlonStatRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List regions
	 * A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getregion_listResponse200
	 */
export function getregionList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetregionListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/region/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetregionListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get region
 * A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
 * @param params.id - This parameter can be a string or an integer.
 * @see getregion_retrieveResponse200
 */
export function getregionRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetregionRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/region/${data.id}/`;
	return apiClient.get<T.GetregionRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List stats
	 * Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getstat_listResponse200
	 */
export function getstatList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetstatListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/stat/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetstatListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get stat
 * Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
 * @param params.id - This parameter can be a string or an integer.
 * @see getstat_retrieveResponse200
 */
export function getstatRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetstatRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/stat/${data.id}/`;
	return apiClient.get<T.GetstatRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List super contest effects
	 * Super contest effects refer to the effects of moves when used in super contests.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getsuper_contest_effect_listResponse200
	 */
export function getsuperContestEffectList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetsuperContestEffectListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/super-contest-effect/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetsuperContestEffectListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get super contest effect
 * Super contest effects refer to the effects of moves when used in super contests.
 * @param params.id - This parameter can be a string or an integer.
 * @see getsuper_contest_effect_retrieveResponse200
 */
export function getsuperContestEffectRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetsuperContestEffectRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/super-contest-effect/${data.id}/`;
	return apiClient.get<T.GetsuperContestEffectRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List types
	 * Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see gettype_listResponse200
	 */
export function gettypeList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GettypeListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/type/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GettypeListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get types
 * Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.
 * @param params.id - This parameter can be a string or an integer.
 * @see gettype_retrieveResponse200
 */
export function gettypeRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GettypeRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/type/${data.id}/`;
	return apiClient.get<T.GettypeRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List versions
	 * Versions of the games, e.g., Red, Blue or Yellow.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getversion_listResponse200
	 */
export function getversionList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetversionListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/version/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetversionListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get version
 * Versions of the games, e.g., Red, Blue or Yellow.
 * @param params.id - This parameter can be a string or an integer.
 * @see getversion_retrieveResponse200
 */
export function getversionRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetversionRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/version/${data.id}/`;
	return apiClient.get<T.GetversionRetrieveResponse200>(url, {
		...config,
	});
}

/**
	 * List version groups
	 * Version groups categorize highly similar versions of the games.
	 * @param query.limit - Number of results to return per page.
	 * @param query.offset - The initial index from which to return the results.
	 * @param query.q - > Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)
Case-insensitive query applied on the `name` property. 
	 * @see getversion_group_listResponse200
	 */
export function getversionGroupList(
	data: { limit?: number; offset?: number; q?: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetversionGroupListResponse200>> {
	const apiClient = getApiClient();
	const url = "/api/v2/version-group/";
	const queryData = {
		limit: data.limit,
		offset: data.offset,
		q: data.q,
	};
	return apiClient.get<T.GetversionGroupListResponse200>(url, {
		params: queryData,

		...config,
	});
}

/**
 * Get version group
 * Version groups categorize highly similar versions of the games.
 * @param params.id - This parameter can be a string or an integer.
 * @see getversion_group_retrieveResponse200
 */
export function getversionGroupRetrieve(
	data: { id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetversionGroupRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/version-group/${data.id}/`;
	return apiClient.get<T.GetversionGroupRetrieveResponse200>(url, {
		...config,
	});
}

/**
 * Get pokemon encounter
 * Handles Pokemon Encounters as a sub-resource.
 * @param params.pokemon_id
 * @see getpokemon_encounters_retrieveResponse200
 */
export function getpokemonEncountersRetrieve(
	data: { pokemon_id: string },
	config?: AxiosRequestConfig
): Promise<AxiosResponse<T.GetpokemonEncountersRetrieveResponse200>> {
	const apiClient = getApiClient();
	const url = `/api/v2/pokemon/${data.pokemon_id}/encounters`;
	return apiClient.get<T.GetpokemonEncountersRetrieveResponse200>(url, {
		...config,
	});
}
