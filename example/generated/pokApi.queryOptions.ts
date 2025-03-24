import { queryOptions, skipToken } from "@tanstack/react-query";
import * as apiClient from "./pokApi.client";
const hasDefinedProps = <T extends { [P in K]?: any }, K extends PropertyKey>(
	obj: T,
	...keys: K[]
): obj is T & { [P in K]-?: Exclude<T[P], undefined> } => {
	return keys.every((k) => obj[k] !== undefined);
};

export const getabilityListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getabilityList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getabilityList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getabilityList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getabilityList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getabilityRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getabilityRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getabilityRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getabilityRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getabilityRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getberryListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getberryList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getberryList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getberryList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getberryList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getberryRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getberryRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getberryRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getberryRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getberryRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getberryFirmnessListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getberryFirmnessList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getberryFirmnessList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getberryFirmnessList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getberryFirmnessList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getberryFirmnessRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getberryFirmnessRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getberryFirmnessRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getberryFirmnessRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getberryFirmnessRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getberryFlavorListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getberryFlavorList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getberryFlavorList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getberryFlavorList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getberryFlavorList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getberryFlavorRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getberryFlavorRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getberryFlavorRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getberryFlavorRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getberryFlavorRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getcharacteristicListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getcharacteristicList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getcharacteristicList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getcharacteristicList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getcharacteristicList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getcharacteristicRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getcharacteristicRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getcharacteristicRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getcharacteristicRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getcharacteristicRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getcontestTypeListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getcontestTypeList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getcontestTypeList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getcontestTypeList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getcontestTypeList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getcontestTypeRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getcontestTypeRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getcontestTypeRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getcontestTypeRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getcontestTypeRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getcontestEffectListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getcontestEffectList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getcontestEffectList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getcontestEffectList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getcontestEffectList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getcontestEffectRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getcontestEffectRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getcontestEffectRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getcontestEffectRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getcontestEffectRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const geteggGroupListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.geteggGroupList>[0]>,
	config?: Partial<Parameters<typeof apiClient.geteggGroupList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["geteggGroupList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.geteggGroupList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const geteggGroupRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.geteggGroupRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.geteggGroupRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["geteggGroupRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.geteggGroupRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getencounterMethodListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getencounterMethodList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getencounterMethodList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getencounterMethodList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getencounterMethodList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getencounterMethodRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getencounterMethodRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getencounterMethodRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getencounterMethodRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getencounterMethodRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getencounterConditionListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getencounterConditionList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getencounterConditionList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getencounterConditionList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getencounterConditionList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getencounterConditionRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getencounterConditionRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getencounterConditionRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getencounterConditionRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getencounterConditionRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getencounterConditionValueListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getencounterConditionValueList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getencounterConditionValueList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getencounterConditionValueList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getencounterConditionValueList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getencounterConditionValueRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getencounterConditionValueRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getencounterConditionValueRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getencounterConditionValueRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getencounterConditionValueRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getevolutionChainListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getevolutionChainList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getevolutionChainList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getevolutionChainList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getevolutionChainList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getevolutionChainRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getevolutionChainRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getevolutionChainRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getevolutionChainRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getevolutionChainRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getevolutionTriggerListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getevolutionTriggerList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getevolutionTriggerList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getevolutionTriggerList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getevolutionTriggerList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getevolutionTriggerRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getevolutionTriggerRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getevolutionTriggerRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getevolutionTriggerRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getevolutionTriggerRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getgenerationListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getgenerationList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getgenerationList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getgenerationList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getgenerationList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getgenerationRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getgenerationRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getgenerationRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getgenerationRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getgenerationRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getgenderListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getgenderList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getgenderList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getgenderList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getgenderList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getgenderRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getgenderRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getgenderRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getgenderRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getgenderRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getgrowthRateListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getgrowthRateList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getgrowthRateList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getgrowthRateList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getgrowthRateList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getgrowthRateRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getgrowthRateRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getgrowthRateRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getgrowthRateRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getgrowthRateRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getitemListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getitemList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getitemList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getitemList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getitemList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getitemRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getitemRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getitemRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getitemRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getitemRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getitemCategoryListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getitemCategoryList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getitemCategoryList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getitemCategoryList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getitemCategoryList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getitemCategoryRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getitemCategoryRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getitemCategoryRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getitemCategoryRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getitemCategoryRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getitemAttributeListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getitemAttributeList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getitemAttributeList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getitemAttributeList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getitemAttributeList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getitemAttributeRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getitemAttributeRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getitemAttributeRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getitemAttributeRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getitemAttributeRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getitemFlingEffectListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getitemFlingEffectList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getitemFlingEffectList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getitemFlingEffectList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getitemFlingEffectList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getitemFlingEffectRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getitemFlingEffectRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getitemFlingEffectRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getitemFlingEffectRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getitemFlingEffectRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getitemPocketListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getitemPocketList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getitemPocketList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getitemPocketList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getitemPocketList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getitemPocketRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getitemPocketRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getitemPocketRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getitemPocketRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getitemPocketRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getlanguageListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getlanguageList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getlanguageList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getlanguageList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getlanguageList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getlanguageRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getlanguageRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getlanguageRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getlanguageRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getlanguageRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getlocationListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getlocationList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getlocationList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getlocationList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getlocationList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getlocationRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getlocationRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getlocationRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getlocationRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getlocationRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getlocationAreaListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getlocationAreaList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getlocationAreaList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getlocationAreaList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getlocationAreaList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getlocationAreaRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getlocationAreaRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getlocationAreaRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getlocationAreaRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getlocationAreaRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmachineListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmachineList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmachineList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getmachineList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmachineList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmachineRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmachineRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmachineRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getmachineRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmachineRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getmoveList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getmoveRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveAilmentListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveAilmentList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveAilmentList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getmoveAilmentList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveAilmentList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveAilmentRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveAilmentRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveAilmentRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getmoveAilmentRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveAilmentRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveBattleStyleListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveBattleStyleList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveBattleStyleList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getmoveBattleStyleList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveBattleStyleList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveBattleStyleRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveBattleStyleRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveBattleStyleRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getmoveBattleStyleRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveBattleStyleRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveCategoryListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveCategoryList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveCategoryList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getmoveCategoryList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveCategoryList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveCategoryRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveCategoryRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveCategoryRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getmoveCategoryRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveCategoryRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveDamageClassListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveDamageClassList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveDamageClassList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getmoveDamageClassList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveDamageClassList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveDamageClassRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveDamageClassRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveDamageClassRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getmoveDamageClassRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveDamageClassRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveLearnMethodListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveLearnMethodList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveLearnMethodList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getmoveLearnMethodList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveLearnMethodList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveLearnMethodRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveLearnMethodRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveLearnMethodRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getmoveLearnMethodRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveLearnMethodRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveTargetListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveTargetList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveTargetList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getmoveTargetList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveTargetList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getmoveTargetRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getmoveTargetRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getmoveTargetRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getmoveTargetRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getmoveTargetRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getnatureListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getnatureList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getnatureList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getnatureList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getnatureList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getnatureRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getnatureRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getnatureRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getnatureRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getnatureRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpalParkAreaListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpalParkAreaList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpalParkAreaList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getpalParkAreaList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpalParkAreaList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpalParkAreaRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpalParkAreaRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpalParkAreaRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getpalParkAreaRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpalParkAreaRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokedexListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokedexList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokedexList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getpokedexList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokedexList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokedexRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokedexRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokedexRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getpokedexRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokedexRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getpokemonList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getpokemonRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonColorListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonColorList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonColorList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getpokemonColorList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonColorList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonColorRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonColorRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonColorRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getpokemonColorRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonColorRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonFormListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonFormList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonFormList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getpokemonFormList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonFormList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonFormRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonFormRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonFormRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getpokemonFormRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonFormRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonHabitatListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonHabitatList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonHabitatList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getpokemonHabitatList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonHabitatList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonHabitatRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonHabitatRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonHabitatRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getpokemonHabitatRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonHabitatRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonShapeListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonShapeList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonShapeList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getpokemonShapeList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonShapeList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonShapeRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonShapeRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonShapeRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getpokemonShapeRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonShapeRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonSpeciesListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonSpeciesList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonSpeciesList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getpokemonSpeciesList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonSpeciesList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonSpeciesRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonSpeciesRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonSpeciesRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getpokemonSpeciesRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonSpeciesRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokeathlonStatListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokeathlonStatList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokeathlonStatList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getpokeathlonStatList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokeathlonStatList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokeathlonStatRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokeathlonStatRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokeathlonStatRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getpokeathlonStatRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokeathlonStatRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getregionListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getregionList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getregionList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getregionList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getregionList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getregionRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getregionRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getregionRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getregionRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getregionRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getstatListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getstatList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getstatList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getstatList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getstatList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getstatRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getstatRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getstatRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getstatRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getstatRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getsuperContestEffectListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getsuperContestEffectList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getsuperContestEffectList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getsuperContestEffectList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getsuperContestEffectList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getsuperContestEffectRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getsuperContestEffectRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getsuperContestEffectRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getsuperContestEffectRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getsuperContestEffectRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const gettypeListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.gettypeList>[0]>,
	config?: Partial<Parameters<typeof apiClient.gettypeList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["gettypeList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.gettypeList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const gettypeRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.gettypeRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.gettypeRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["gettypeRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.gettypeRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getversionListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getversionList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getversionList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getversionList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getversionList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getversionRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getversionRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getversionRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getversionRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getversionRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getversionGroupListQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getversionGroupList>[0]>,
	config?: Partial<Parameters<typeof apiClient.getversionGroupList>[1]>
) => {
	const enabled = hasDefinedProps(params);
	return queryOptions({
		queryKey: ["getversionGroupList", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getversionGroupList(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getversionGroupRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getversionGroupRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getversionGroupRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "id");
	return queryOptions({
		queryKey: ["getversionGroupRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getversionGroupRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};

export const getpokemonEncountersRetrieveQueryOptions = (
	params: Partial<Parameters<typeof apiClient.getpokemonEncountersRetrieve>[0]>,
	config?: Partial<Parameters<typeof apiClient.getpokemonEncountersRetrieve>[1]>
) => {
	const enabled = hasDefinedProps(params, "pokemon_id");
	return queryOptions({
		queryKey: ["getpokemonEncountersRetrieve", params],
		queryFn: enabled
			? async () => {
					const response = await apiClient.getpokemonEncountersRetrieve(params, config);
					return response.data;
				}
			: skipToken,
	});
};
