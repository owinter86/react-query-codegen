import { queryOptions, skipToken } from "@tanstack/react-query";
import * as apiClient from "./pokApi.client";
const hasDefinedProps = <T extends { [P in K]?: any }, K extends PropertyKey>(
	obj: T,
	...keys: K[]
): obj is T & { [P in K]-?: Exclude<T[P], undefined> } => {
	return keys.every((k) => obj[k] !== undefined);
};

export const ability_listQueryOptions = (params: Partial<Parameters<typeof apiClient.ability_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["ability_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ability_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const ability_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.ability_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["ability_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.ability_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const berry_listQueryOptions = (params: Partial<Parameters<typeof apiClient.berry_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["berry_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.berry_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const berry_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.berry_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["berry_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.berry_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const berry_firmness_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.berry_firmness_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["berry_firmness_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.berry_firmness_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const berry_firmness_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.berry_firmness_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["berry_firmness_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.berry_firmness_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const berry_flavor_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.berry_flavor_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["berry_flavor_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.berry_flavor_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const berry_flavor_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.berry_flavor_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["berry_flavor_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.berry_flavor_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const characteristic_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.characteristic_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["characteristic_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.characteristic_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const characteristic_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.characteristic_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["characteristic_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.characteristic_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const contest_type_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.contest_type_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["contest_type_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.contest_type_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const contest_type_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.contest_type_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["contest_type_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.contest_type_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const contest_effect_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.contest_effect_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["contest_effect_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.contest_effect_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const contest_effect_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.contest_effect_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["contest_effect_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.contest_effect_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const egg_group_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.egg_group_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["egg_group_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.egg_group_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const egg_group_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.egg_group_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["egg_group_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.egg_group_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const encounter_method_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.encounter_method_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["encounter_method_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.encounter_method_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const encounter_method_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.encounter_method_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["encounter_method_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.encounter_method_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const encounter_condition_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.encounter_condition_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["encounter_condition_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.encounter_condition_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const encounter_condition_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.encounter_condition_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["encounter_condition_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.encounter_condition_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const encounter_condition_value_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.encounter_condition_value_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["encounter_condition_value_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.encounter_condition_value_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const encounter_condition_value_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.encounter_condition_value_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["encounter_condition_value_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.encounter_condition_value_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const evolution_chain_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.evolution_chain_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["evolution_chain_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.evolution_chain_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const evolution_chain_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.evolution_chain_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["evolution_chain_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.evolution_chain_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const evolution_trigger_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.evolution_trigger_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["evolution_trigger_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.evolution_trigger_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const evolution_trigger_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.evolution_trigger_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["evolution_trigger_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.evolution_trigger_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const generation_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.generation_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["generation_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.generation_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const generation_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.generation_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["generation_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.generation_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const gender_listQueryOptions = (params: Partial<Parameters<typeof apiClient.gender_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["gender_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.gender_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const gender_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.gender_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["gender_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.gender_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const growth_rate_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.growth_rate_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["growth_rate_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.growth_rate_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const growth_rate_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.growth_rate_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["growth_rate_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.growth_rate_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const item_listQueryOptions = (params: Partial<Parameters<typeof apiClient.item_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["item_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.item_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const item_retrieveQueryOptions = (params: Partial<Parameters<typeof apiClient.item_retrieve>[0]>) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["item_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.item_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const item_category_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.item_category_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["item_category_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.item_category_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const item_category_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.item_category_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["item_category_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.item_category_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const item_attribute_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.item_attribute_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["item_attribute_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.item_attribute_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const item_attribute_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.item_attribute_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["item_attribute_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.item_attribute_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const item_fling_effect_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.item_fling_effect_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["item_fling_effect_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.item_fling_effect_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const item_fling_effect_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.item_fling_effect_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["item_fling_effect_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.item_fling_effect_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const item_pocket_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.item_pocket_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["item_pocket_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.item_pocket_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const item_pocket_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.item_pocket_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["item_pocket_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.item_pocket_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const language_listQueryOptions = (params: Partial<Parameters<typeof apiClient.language_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["language_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.language_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const language_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.language_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["language_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.language_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const location_listQueryOptions = (params: Partial<Parameters<typeof apiClient.location_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["location_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.location_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const location_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.location_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["location_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.location_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const location_area_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.location_area_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["location_area_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.location_area_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const location_area_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.location_area_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["location_area_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.location_area_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const machine_listQueryOptions = (params: Partial<Parameters<typeof apiClient.machine_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["machine_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.machine_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const machine_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.machine_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["machine_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.machine_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_listQueryOptions = (params: Partial<Parameters<typeof apiClient.move_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_retrieveQueryOptions = (params: Partial<Parameters<typeof apiClient.move_retrieve>[0]>) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_ailment_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.move_ailment_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_ailment_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_ailment_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_ailment_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.move_ailment_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_ailment_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_ailment_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_battle_style_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.move_battle_style_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_battle_style_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_battle_style_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_battle_style_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.move_battle_style_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_battle_style_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_battle_style_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_category_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.move_category_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_category_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_category_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_category_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.move_category_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_category_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_category_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_damage_class_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.move_damage_class_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_damage_class_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_damage_class_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_damage_class_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.move_damage_class_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_damage_class_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_damage_class_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_learn_method_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.move_learn_method_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_learn_method_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_learn_method_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_learn_method_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.move_learn_method_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_learn_method_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_learn_method_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_target_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.move_target_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["move_target_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_target_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const move_target_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.move_target_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["move_target_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.move_target_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const nature_listQueryOptions = (params: Partial<Parameters<typeof apiClient.nature_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["nature_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.nature_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const nature_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.nature_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["nature_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.nature_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pal_park_area_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pal_park_area_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pal_park_area_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pal_park_area_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pal_park_area_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pal_park_area_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pal_park_area_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pal_park_area_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokedex_listQueryOptions = (params: Partial<Parameters<typeof apiClient.pokedex_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokedex_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokedex_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokedex_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokedex_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokedex_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokedex_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_listQueryOptions = (params: Partial<Parameters<typeof apiClient.pokemon_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokemon_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemon_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokemon_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_color_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemon_color_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokemon_color_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_color_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_color_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemon_color_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokemon_color_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_color_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_form_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemon_form_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokemon_form_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_form_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_form_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemon_form_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokemon_form_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_form_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_habitat_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemon_habitat_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokemon_habitat_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_habitat_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_habitat_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemon_habitat_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokemon_habitat_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_habitat_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_shape_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemon_shape_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokemon_shape_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_shape_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_shape_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemon_shape_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokemon_shape_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_shape_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_species_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemon_species_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokemon_species_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_species_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_species_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemon_species_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokemon_species_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_species_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokeathlon_stat_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokeathlon_stat_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["pokeathlon_stat_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokeathlon_stat_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokeathlon_stat_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokeathlon_stat_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["pokeathlon_stat_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokeathlon_stat_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const region_listQueryOptions = (params: Partial<Parameters<typeof apiClient.region_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["region_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.region_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const region_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.region_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["region_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.region_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const stat_listQueryOptions = (params: Partial<Parameters<typeof apiClient.stat_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["stat_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.stat_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const stat_retrieveQueryOptions = (params: Partial<Parameters<typeof apiClient.stat_retrieve>[0]>) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["stat_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.stat_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const super_contest_effect_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.super_contest_effect_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["super_contest_effect_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.super_contest_effect_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const super_contest_effect_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.super_contest_effect_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["super_contest_effect_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.super_contest_effect_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const type_listQueryOptions = (params: Partial<Parameters<typeof apiClient.type_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["type_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.type_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const type_retrieveQueryOptions = (params: Partial<Parameters<typeof apiClient.type_retrieve>[0]>) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["type_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.type_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const version_listQueryOptions = (params: Partial<Parameters<typeof apiClient.version_list>[0]>) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["version_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.version_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const version_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.version_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["version_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.version_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const version_group_listQueryOptions = (
	params: Partial<Parameters<typeof apiClient.version_group_list>[0]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["version_group_list", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.version_group_list(params);
					return response.data;
				}
			: skipToken,
	});
};

export const version_group_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.version_group_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["version_group_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.version_group_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};

export const pokemon_encounters_retrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.pokemon_encounters_retrieve>[0]>
) => {
	const enabled = hasDefinedProps(params, "pokemon_id");
	return queryOptions({
		queryKey: ["pokemon_encounters_retrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.pokemon_encounters_retrieve(params);
					return response.data;
				}
			: skipToken,
	});
};
