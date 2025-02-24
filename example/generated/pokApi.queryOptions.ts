import { queryOptions, skipToken } from "@tanstack/react-query";
import * as apiClient from "./pokApi.client";
const hasDefinedProps = <T extends { [P in K]?: any }, K extends PropertyKey>(
	obj: T,
	...keys: K[]
): obj is T & { [P in K]-?: Exclude<T[P], undefined> } => {
	return keys.every((k) => obj[k] !== undefined);
};

export const abilityListQueryOptions = (params: Partial<Parameters<typeof apiClient.abilityList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["ability_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.abilityList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const abilityRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.abilityRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ability_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.abilityRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const berryListQueryOptions = (params: Partial<Parameters<typeof apiClient.berryList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["berry_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.berryList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const berryRetrieveQueryOptions = (params: Partial<Parameters<typeof apiClient.berryRetrieve>[0]>) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["berry_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.berryRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const berryFirmnessListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.berryFirmnessList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["berry_firmness_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.berryFirmnessList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const berryFirmnessRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.berryFirmnessRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["berry_firmness_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.berryFirmnessRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const berryFlavorListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.berryFlavorList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["berry_flavor_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.berryFlavorList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const berryFlavorRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.berryFlavorRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["berry_flavor_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.berryFlavorRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const characteristicListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.characteristicList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["characteristic_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.characteristicList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const characteristicRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.characteristicRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["characteristic_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.characteristicRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const contestTypeListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.contestTypeList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["contest_type_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.contestTypeList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const contestTypeRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.contestTypeRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["contest_type_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.contestTypeRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const contestEffectListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.contestEffectList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["contest_effect_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.contestEffectList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const contestEffectRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.contestEffectRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["contest_effect_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.contestEffectRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const eggGroupListQueryOptions = (params: Partial<Parameters<typeof apiClient.eggGroupList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["egg_group_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.eggGroupList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const eggGroupRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.eggGroupRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["egg_group_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.eggGroupRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const encounterMethodListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.encounterMethodList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["encounter_method_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.encounterMethodList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const encounterMethodRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.encounterMethodRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["encounter_method_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.encounterMethodRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const encounterConditionListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.encounterConditionList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["encounter_condition_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.encounterConditionList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const encounterConditionRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.encounterConditionRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["encounter_condition_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.encounterConditionRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const encounterConditionValueListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.encounterConditionValueList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["encounter_condition_value_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.encounterConditionValueList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const encounterConditionValueRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.encounterConditionValueRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["encounter_condition_value_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.encounterConditionValueRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const evolutionChainListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.evolutionChainList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["evolution_chain_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.evolutionChainList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const evolutionChainRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.evolutionChainRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["evolution_chain_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.evolutionChainRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const evolutionTriggerListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.evolutionTriggerList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["evolution_trigger_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.evolutionTriggerList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const evolutionTriggerRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.evolutionTriggerRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["evolution_trigger_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.evolutionTriggerRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const generationListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.generationList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["generation_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.generationList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const generationRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.generationRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["generation_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.generationRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const genderListQueryOptions = (params: Partial<Parameters<typeof apiClient.genderList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["gender_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.genderList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const genderRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.genderRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["gender_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.genderRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const growthRateListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.growthRateList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["growth_rate_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.growthRateList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const growthRateRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.growthRateRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["growth_rate_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.growthRateRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const itemListQueryOptions = (params: Partial<Parameters<typeof apiClient.itemList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["item_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.itemList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const itemRetrieveQueryOptions = (params: Partial<Parameters<typeof apiClient.itemRetrieve>[0]>) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["item_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.itemRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const itemCategoryListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.itemCategoryList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["item_category_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.itemCategoryList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const itemCategoryRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.itemCategoryRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["item_category_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.itemCategoryRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const itemAttributeListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.itemAttributeList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["item_attribute_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.itemAttributeList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const itemAttributeRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.itemAttributeRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["item_attribute_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.itemAttributeRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const itemFlingEffectListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.itemFlingEffectList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["item_fling_effect_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.itemFlingEffectList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const itemFlingEffectRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.itemFlingEffectRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["item_fling_effect_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.itemFlingEffectRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const itemPocketListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.itemPocketList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["item_pocket_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.itemPocketList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const itemPocketRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.itemPocketRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["item_pocket_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.itemPocketRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const languageListQueryOptions = (params: Partial<Parameters<typeof apiClient.languageList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["language_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.languageList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const languageRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.languageRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["language_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.languageRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const locationListQueryOptions = (params: Partial<Parameters<typeof apiClient.locationList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["location_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.locationList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const locationRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.locationRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["location_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.locationRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const locationAreaListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.locationAreaList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["location_area_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.locationAreaList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const locationAreaRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.locationAreaRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["location_area_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.locationAreaRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const machineListQueryOptions = (params: Partial<Parameters<typeof apiClient.machineList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["machine_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.machineList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const machineRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.machineRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["machine_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.machineRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveListQueryOptions = (params: Partial<Parameters<typeof apiClient.moveList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveRetrieveQueryOptions = (params: Partial<Parameters<typeof apiClient.moveRetrieve>[0]>) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveAilmentListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.moveAilmentList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_ailment_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveAilmentList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveAilmentRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.moveAilmentRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_ailment_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveAilmentRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveBattleStyleListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.moveBattleStyleList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_battle_style_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveBattleStyleList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveBattleStyleRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.moveBattleStyleRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_battle_style_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveBattleStyleRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveCategoryListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.moveCategoryList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_category_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveCategoryList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveCategoryRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.moveCategoryRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_category_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveCategoryRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveDamageClassListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.moveDamageClassList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_damage_class_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveDamageClassList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveDamageClassRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.moveDamageClassRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_damage_class_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveDamageClassRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveLearnMethodListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.moveLearnMethodList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_learn_method_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveLearnMethodList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveLearnMethodRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.moveLearnMethodRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_learn_method_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveLearnMethodRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveTargetListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.moveTargetList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_target_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveTargetList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const moveTargetRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.moveTargetRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_target_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.moveTargetRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const natureListQueryOptions = (params: Partial<Parameters<typeof apiClient.natureList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["nature_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.natureList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const natureRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.natureRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["nature_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.natureRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const palParkAreaListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.palParkAreaList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pal_park_area_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.palParkAreaList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const palParkAreaRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.palParkAreaRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pal_park_area_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.palParkAreaRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokedexListQueryOptions = (params: Partial<Parameters<typeof apiClient.pokedexList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokedex_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokedexList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokedexRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokedexRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokedex_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokedexRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonListQueryOptions = (params: Partial<Parameters<typeof apiClient.pokemonList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokemon_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemonRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokemon_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonColorListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemonColorList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokemon_color_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonColorList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonColorRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemonColorRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokemon_color_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonColorRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonFormListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemonFormList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokemon_form_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonFormList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonFormRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemonFormRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokemon_form_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonFormRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonHabitatListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemonHabitatList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokemon_habitat_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonHabitatList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonHabitatRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemonHabitatRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokemon_habitat_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonHabitatRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonShapeListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemonShapeList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokemon_shape_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonShapeList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonShapeRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemonShapeRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokemon_shape_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonShapeRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonSpeciesListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemonSpeciesList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokemon_species_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonSpeciesList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonSpeciesRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemonSpeciesRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokemon_species_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonSpeciesRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokeathlonStatListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokeathlonStatList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokeathlon_stat_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokeathlonStatList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokeathlonStatRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokeathlonStatRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokeathlon_stat_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokeathlonStatRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const regionListQueryOptions = (params: Partial<Parameters<typeof apiClient.regionList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["region_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.regionList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const regionRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.regionRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["region_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.regionRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const statListQueryOptions = (params: Partial<Parameters<typeof apiClient.statList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["stat_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.statList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const statRetrieveQueryOptions = (params: Partial<Parameters<typeof apiClient.statRetrieve>[0]>) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["stat_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.statRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const superContestEffectListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.superContestEffectList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["super_contest_effect_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.superContestEffectList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const superContestEffectRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.superContestEffectRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["super_contest_effect_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.superContestEffectRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const typeListQueryOptions = (params: Partial<Parameters<typeof apiClient.typeList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["type_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.typeList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const typeRetrieveQueryOptions = (params: Partial<Parameters<typeof apiClient.typeRetrieve>[0]>) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["type_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.typeRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const versionListQueryOptions = (params: Partial<Parameters<typeof apiClient.versionList>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["version_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.versionList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const versionRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.versionRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["version_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.versionRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const versionGroupListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.versionGroupList>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["version_group_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.versionGroupList(params);
					return response.data;
				}
			: skipToken,
	});
};

export const versionGroupRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.versionGroupRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["version_group_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.versionGroupRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemonEncountersRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemonEncountersRetrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "pokemon_id");
	return queryOptions({
		queryKey: ["pokemon_encounters_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemonEncountersRetrieve(params);
					return response.data;
				}
			: skipToken,
	});
};
