/* Generated TypeScript Definitions */

export interface AbilityChange {
	version_group: VersionGroupSummary;
	effect_entries: Array<AbilityChangeEffectText>;
}

export interface AbilityChangeEffectText {
	effect: string;
	language: LanguageSummary;
}

export interface AbilityDetail {
	id: number;
	name: string;
	is_main_series?: boolean;
	generation: GenerationSummary;
	names: Array<AbilityName>;
	effect_entries: Array<AbilityEffectText>;
	effect_changes: Array<AbilityChange>;
	flavor_text_entries: Array<AbilityFlavorText>;
	pokemon: Array<{
		is_hidden: boolean;
		slot: number;
		pokemon: {
			name: string;
			url: string;
		};
	}>;
}

export interface AbilityEffectText {
	effect: string;
	short_effect: string;
	language: LanguageSummary;
}

export interface AbilityFlavorText {
	flavor_text: string;
	language: LanguageSummary;
	version_group: VersionGroupSummary;
}

export interface AbilityName {
	name: string;
	language: LanguageSummary;
}

export interface AbilitySummary {
	name: string;
	url: string;
}

export interface BerryDetail {
	id: number;
	name: string;
	growth_time: number;
	max_harvest: number;
	natural_gift_power: number;
	size: number;
	smoothness: number;
	soil_dryness: number;
	firmness: BerryFirmnessSummary;
	flavors: Array<{
		potency: number;
		flavor: {
			name?: string;
			url?: string;
		};
	}>;
	item: ItemSummary;
	natural_gift_type: TypeSummary;
}

export interface BerryFirmnessDetail {
	id: number;
	name: string;
	berries: Array<BerrySummary>;
	names: Array<BerryFirmnessName>;
}

export interface BerryFirmnessName {
	name: string;
	language: LanguageSummary;
}

export interface BerryFirmnessSummary {
	name: string;
	url: string;
}

export interface BerryFlavorDetail {
	id: number;
	name: string;
	berries: Array<{
		potency: number;
		berry: {
			name?: string;
			url?: string;
		};
	}>;
	contest_type: ContestTypeSummary;
	names: Array<BerryFlavorName>;
}

export interface BerryFlavorName {
	name: string;
	language: LanguageSummary;
}

export interface BerryFlavorSummary {
	name: string;
	url: string;
}

export interface BerrySummary {
	name: string;
	url: string;
}

export interface CharacteristicDescription {
	description?: string;
	language: LanguageSummary;
}

export interface CharacteristicDetail {
	id: number;
	gene_modulo: number;
	possible_values: Array<number>;
	highest_stat: StatSummary;
	descriptions: Array<CharacteristicDescription>;
}

export interface CharacteristicSummary {
	url: string;
}

export interface ContestEffectDetail {
	id: number;
	appeal: number;
	jam: number;
	effect_entries: Array<ContestEffectEffectText>;
	flavor_text_entries: Array<ContestEffectFlavorText>;
}

export interface ContestEffectEffectText {
	effect: string;
	language: LanguageSummary;
}

export interface ContestEffectFlavorText {
	flavor_text: string;
	language: LanguageSummary;
}

export interface ContestEffectSummary {
	url: string;
}

export interface ContestTypeDetail {
	id: number;
	name: string;
	berry_flavor: any;
	names: Array<ContestTypeName>;
}

export interface ContestTypeName {
	name: string;
	color: string;
	language: LanguageSummary;
}

export interface ContestTypeSummary {
	name: string;
	url: string;
}

export interface EggGroupDetail {
	id: number;
	name: string;
	names: Array<EggGroupName>;
	pokemon_species: Array<{
		name?: string;
		url?: string;
	}>;
}

export interface EggGroupName {
	name: string;
	language: LanguageSummary;
}

export interface EggGroupSummary {
	name: string;
	url: string;
}

export interface EncounterConditionDetail {
	id: number;
	name: string;
	values: Array<EncounterConditionValueSummary>;
	names: Array<EncounterConditionName>;
}

export interface EncounterConditionName {
	name: string;
	language: LanguageSummary;
}

export interface EncounterConditionSummary {
	name: string;
	url: string;
}

export interface EncounterConditionValueDetail {
	id: number;
	name: string;
	condition: EncounterConditionSummary;
	names: Array<EncounterConditionValueName>;
}

export interface EncounterConditionValueName {
	name: string;
	language: LanguageSummary;
}

export interface EncounterConditionValueSummary {
	name: string;
	url: string;
}

export interface EncounterMethodDetail {
	id: number;
	name: string;
	order?: any;
	names: Array<EncounterMethodName>;
}

export interface EncounterMethodName {
	name: string;
	language: LanguageSummary;
}

export interface EncounterMethodSummary {
	name: string;
	url: string;
}

export interface EvolutionChainDetail {
	id: number;
	baby_trigger_item: ItemSummary;
	chain: {
		evolution_details: Array<any>;
		evolves_to: Array<{
			evolution_details: Array<{
				gender: {
					name: string;
					url: string;
				};
				held_item: {
					name: string;
					url: string;
				};
				item: {
					name: string;
					url: string;
				};
				known_move: any;
				known_move_type: any;
				location: {
					name: string;
					url: string;
				};
				min_affection: number;
				min_beauty: number;
				min_happiness: number;
				min_level: number;
				needs_overworld_rain: boolean;
				party_species: string;
				party_type: string;
				relative_physical_stats: string;
				time_of_day: string;
				trade_species: string;
				trigger: {
					name: string;
					url: string;
				};
				turn_upside_down: boolean;
			}>;
			is_baby: boolean;
			species: {
				name: string;
				url: string;
			};
		}>;
		is_baby: boolean;
		species: {
			name: string;
			url: string;
		};
	};
}

export interface EvolutionChainSummary {
	url: string;
}

export interface EvolutionTriggerDetail {
	id: number;
	name: string;
	names: Array<EvolutionTriggerName>;
	pokemon_species: Array<{
		name: string;
		url: string;
	}>;
}

export interface EvolutionTriggerName {
	name: string;
	language: LanguageSummary;
}

export interface EvolutionTriggerSummary {
	name: string;
	url: string;
}

export interface Experience {
	level: number;
	experience: number;
}

export interface GenderDetail {
	id: number;
	name: string;
	pokemon_species_details: Array<{
		rate: number;
		pokemon_species: {
			name: string;
			url: string;
		};
	}>;
	required_for_evolution: Array<{
		name: string;
		url: string;
	}>;
}

export interface GenderSummary {
	name: string;
	url: string;
}

export interface GenerationDetail {
	id: number;
	name: string;
	abilities: Array<AbilitySummary>;
	main_region: RegionSummary;
	moves: Array<MoveSummary>;
	names: Array<GenerationName>;
	pokemon_species: Array<PokemonSpeciesSummary>;
	types: Array<TypeSummary>;
	version_groups: Array<VersionGroupSummary>;
}

export interface GenerationName {
	name: string;
	language: LanguageSummary;
}

export interface GenerationSummary {
	name: string;
	url: string;
}

export interface GrowthRateDescription {
	description?: string;
	language: LanguageSummary;
}

export interface GrowthRateDetail {
	id: number;
	name: string;
	formula: string;
	descriptions: Array<GrowthRateDescription>;
	levels: Array<Experience>;
	pokemon_species: Array<PokemonSpeciesSummary>;
}

export interface GrowthRateSummary {
	name: string;
	url: string;
}

export interface ItemAttributeDescription {
	description?: string;
	language: LanguageSummary;
}

export interface ItemAttributeDetail {
	id: number;
	name: string;
	descriptions: Array<ItemAttributeDescription>;
	items: Array<{
		name: string;
		url: string;
	}>;
	names: Array<ItemAttributeName>;
}

export interface ItemAttributeName {
	name: string;
	language: LanguageSummary;
}

export interface ItemAttributeSummary {
	name: string;
	url: string;
}

export interface ItemCategoryDetail {
	id: number;
	name: string;
	items: Array<ItemSummary>;
	names: Array<ItemCategoryName>;
	pocket: ItemPocketSummary;
}

export interface ItemCategoryName {
	name: string;
	language: LanguageSummary;
}

export interface ItemCategorySummary {
	name: string;
	url: string;
}

export interface ItemDetail {
	id: number;
	name: string;
	cost?: any;
	fling_power?: any;
	fling_effect: ItemFlingEffectSummary;
	attributes: Array<{
		name: string;
		url: string;
	}>;
	category: ItemCategorySummary;
	effect_entries: Array<ItemEffectText>;
	flavor_text_entries: Array<ItemFlavorText>;
	game_indices: Array<ItemGameIndex>;
	names: Array<ItemName>;
	held_by_pokemon: Array<{
		pokemon: {
			name: string;
			url: string;
		};
		"version-details": Array<{
			rarity: number;
			version: {
				name: string;
				url: string;
			};
		}>;
	}>;
	sprites: {
		default: string;
	};
	baby_trigger_for: {
		url: string;
	};
	machines: Array<{
		machine: string;
		version_group: {
			name: string;
			url: string;
		};
	}>;
}

export interface ItemEffectText {
	effect: string;
	short_effect: string;
	language: LanguageSummary;
}

export interface ItemFlavorText {
	text: string;
	version_group: VersionGroupSummary;
	language: LanguageSummary;
}

export interface ItemFlingEffectDetail {
	id: number;
	name: string;
	effect_entries: Array<ItemFlingEffectEffectText>;
	items: Array<ItemSummary>;
}

export interface ItemFlingEffectEffectText {
	effect: string;
	language: LanguageSummary;
}

export interface ItemFlingEffectSummary {
	name: string;
	url: string;
}

export interface ItemGameIndex {
	game_index: number;
	generation: GenerationSummary;
}

export interface ItemName {
	name: string;
	language: LanguageSummary;
}

export interface ItemPocketDetail {
	id: number;
	name: string;
	categories: Array<ItemCategorySummary>;
	names: Array<ItemPocketName>;
}

export interface ItemPocketName {
	name: string;
	language: LanguageSummary;
}

export interface ItemPocketSummary {
	name: string;
	url: string;
}

export interface ItemSummary {
	name: string;
	url: string;
}

export interface LanguageDetail {
	id: number;
	name: string;
	official?: boolean;
	iso639: string;
	iso3166: string;
	names: Array<LanguageName>;
}

export interface LanguageName {
	name: string;
	language: LanguageSummary;
}

export interface LanguageSummary {
	name: string;
	url: string;
}

export interface LocationAreaDetail {
	id: number;
	name: string;
	game_index: number;
	encounter_method_rates: Array<{
		encounter_method: {
			name: string;
			url: string;
		};
		version_details: Array<{
			rate: number;
			version: {
				name: string;
				url: string;
			};
		}>;
	}>;
	location: LocationSummary;
	names: Array<LocationAreaName>;
	pokemon_encounters: Array<{
		pokemon: {
			name: string;
			url: string;
		};
		version_details: Array<{
			version: {
				name: string;
				url: string;
			};
			max_chance: number;
			encounter_details: {
				min_level: number;
				max_level: number;
				condition_values?: {
					name: string;
					url: string;
				};
				chance: number;
				method: {
					name: string;
					url: string;
				};
			};
		}>;
	}>;
}

export interface LocationAreaName {
	name: string;
	language: LanguageSummary;
}

export interface LocationAreaSummary {
	name: string;
	url: string;
}

export interface LocationDetail {
	id: number;
	name: string;
	region: RegionSummary;
	names: Array<LocationName>;
	game_indices: Array<LocationGameIndex>;
	areas: Array<LocationAreaSummary>;
}

export interface LocationGameIndex {
	game_index: number;
	generation: GenerationSummary;
}

export interface LocationName {
	name: string;
	language: LanguageSummary;
}

export interface LocationSummary {
	name: string;
	url: string;
}

export interface MachineDetail {
	id: number;
	item: ItemSummary;
	version_group: VersionGroupSummary;
	move: MoveSummary;
}

export interface MachineSummary {
	url: string;
}

export interface MoveBattleStyleDetail {
	id: number;
	name: string;
	names: Array<MoveBattleStyleName>;
}

export interface MoveBattleStyleName {
	name: string;
	language: LanguageSummary;
}

export interface MoveBattleStyleSummary {
	name: string;
	url: string;
}

export interface MoveChange {
	accuracy?: any;
	power?: any;
	pp?: any;
	effect_chance: number;
	effect_entries: Array<{
		effect: string;
		short_effect: string;
		language: {
			name: string;
			url: string;
		};
	}>;
	type: TypeSummary;
	version_group: VersionGroupSummary;
}

export interface MoveDamageClassDescription {
	description?: string;
	language: LanguageSummary;
}

export interface MoveDamageClassDetail {
	id: number;
	name: string;
	descriptions: Array<MoveDamageClassDescription>;
	moves: Array<MoveSummary>;
	names: Array<MoveDamageClassName>;
}

export interface MoveDamageClassName {
	name: string;
	language: LanguageSummary;
}

export interface MoveDamageClassSummary {
	name: string;
	url: string;
}

export interface MoveDetail {
	id: number;
	name: string;
	accuracy?: any;
	effect_chance: number;
	pp?: any;
	priority?: any;
	power?: any;
	contest_combos: {
		normal: {
			use_before: Array<{
				name: string;
				url: string;
			}>;
			use_after: Array<{
				name: string;
				url: string;
			}>;
		};
		super: {
			use_before: Array<{
				name: string;
				url: string;
			}>;
			use_after: Array<{
				name: string;
				url: string;
			}>;
		};
	};
	contest_type: ContestTypeSummary;
	contest_effect: ContestEffectSummary;
	damage_class: MoveDamageClassSummary;
	effect_entries: Array<{
		effect: string;
		short_effect: string;
		language: {
			name: string;
			url: string;
		};
	}>;
	effect_changes: Array<{
		effect_entries: Array<{
			effect: string;
			language: {
				name: string;
				url: string;
			};
		}>;
		version_group: {
			name: string;
			url: string;
		};
	}>;
	generation: GenerationSummary;
	meta: any;
	names: Array<MoveName>;
	past_values: Array<MoveChange>;
	stat_changes: Array<{
		change: number;
		stat: {
			name: string;
			url: string;
		};
	}>;
	super_contest_effect: SuperContestEffectSummary;
	target: MoveTargetSummary;
	type: TypeSummary;
	machines: Array<{
		machine: {
			url: string;
		};
		version_group: {
			name: string;
			url: string;
		};
	}>;
	flavor_text_entries: Array<MoveFlavorText>;
	learned_by_pokemon: Array<{
		name: string;
		url: string;
	}>;
}

export interface MoveFlavorText {
	flavor_text: string;
	language: LanguageSummary;
	version_group: VersionGroupSummary;
}

export interface MoveLearnMethodDescription {
	description?: string;
	language: LanguageSummary;
}

export interface MoveLearnMethodDetail {
	id: number;
	name: string;
	names: Array<MoveLearnMethodName>;
	descriptions: Array<MoveLearnMethodDescription>;
	version_groups: Array<{
		name: string;
		url: string;
	}>;
}

export interface MoveLearnMethodName {
	name: string;
	language: LanguageSummary;
}

export interface MoveLearnMethodSummary {
	name: string;
	url: string;
}

export interface MoveMeta {
	ailment: MoveMetaAilmentSummary;
	category: MoveMetaCategorySummary;
	min_hits?: any;
	max_hits?: any;
	min_turns?: any;
	max_turns?: any;
	drain?: any;
	healing?: any;
	crit_rate?: any;
	ailment_chance?: any;
	flinch_chance?: any;
	stat_chance?: any;
}

export interface MoveMetaAilmentDetail {
	id: number;
	name: string;
	moves: Array<{
		name: string;
		url: string;
	}>;
	names: Array<MoveMetaAilmentName>;
}

export interface MoveMetaAilmentName {
	name: string;
	language: LanguageSummary;
}

export interface MoveMetaAilmentSummary {
	name: string;
	url: string;
}

export interface MoveMetaCategoryDescription {
	description?: string;
	language: LanguageSummary;
}

export interface MoveMetaCategoryDetail {
	id: number;
	name: string;
	descriptions: Array<MoveMetaCategoryDescription>;
	moves: Array<{
		name: string;
		url: string;
	}>;
}

export interface MoveMetaCategorySummary {
	name: string;
	url: string;
}

export interface MoveName {
	name: string;
	language: LanguageSummary;
}

export interface MoveSummary {
	name: string;
	url: string;
}

export interface MoveTargetDescription {
	description?: string;
	language: LanguageSummary;
}

export interface MoveTargetDetail {
	id: number;
	name: string;
	descriptions: Array<MoveTargetDescription>;
	moves: Array<MoveSummary>;
	names: Array<MoveTargetName>;
}

export interface MoveTargetName {
	name: string;
	language: LanguageSummary;
}

export interface MoveTargetSummary {
	name: string;
	url: string;
}

export interface NatureBattleStylePreference {
	low_hp_preference: number;
	high_hp_preference: number;
	move_battle_style: MoveBattleStyleSummary;
}

export interface NatureDetail {
	id: number;
	name: string;
	decreased_stat: StatSummary;
	increased_stat: StatSummary;
	likes_flavor: BerryFlavorSummary;
	hates_flavor: BerryFlavorSummary;
	berries: Array<BerrySummary>;
	pokeathlon_stat_changes: Array<{
		max_change: number;
		pokeathlon_stat: {
			name: string;
			url: string;
		};
	}>;
	move_battle_style_preferences: Array<NatureBattleStylePreference>;
	names: Array<NatureName>;
}

export interface NatureName {
	name: string;
	language: LanguageSummary;
}

export interface NatureSummary {
	name: string;
	url: string;
}

export interface PaginatedAbilitySummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<AbilitySummary>;
}

export interface PaginatedBerryFirmnessSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<BerryFirmnessSummary>;
}

export interface PaginatedBerryFlavorSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<BerryFlavorSummary>;
}

export interface PaginatedBerrySummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<BerrySummary>;
}

export interface PaginatedCharacteristicSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<CharacteristicSummary>;
}

export interface PaginatedContestEffectSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<ContestEffectSummary>;
}

export interface PaginatedContestTypeSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<ContestTypeSummary>;
}

export interface PaginatedEggGroupSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<EggGroupSummary>;
}

export interface PaginatedEncounterConditionSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<EncounterConditionSummary>;
}

export interface PaginatedEncounterConditionValueSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<EncounterConditionValueSummary>;
}

export interface PaginatedEncounterMethodSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<EncounterMethodSummary>;
}

export interface PaginatedEvolutionChainSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<EvolutionChainSummary>;
}

export interface PaginatedEvolutionTriggerSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<EvolutionTriggerSummary>;
}

export interface PaginatedGenderSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<GenderSummary>;
}

export interface PaginatedGenerationSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<GenerationSummary>;
}

export interface PaginatedGrowthRateSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<GrowthRateSummary>;
}

export interface PaginatedItemAttributeSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<ItemAttributeSummary>;
}

export interface PaginatedItemCategorySummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<ItemCategorySummary>;
}

export interface PaginatedItemFlingEffectSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<ItemFlingEffectSummary>;
}

export interface PaginatedItemPocketSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<ItemPocketSummary>;
}

export interface PaginatedItemSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<ItemSummary>;
}

export interface PaginatedLanguageSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<LanguageSummary>;
}

export interface PaginatedLocationAreaSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<LocationAreaSummary>;
}

export interface PaginatedLocationSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<LocationSummary>;
}

export interface PaginatedMachineSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<MachineSummary>;
}

export interface PaginatedMoveBattleStyleSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<MoveBattleStyleSummary>;
}

export interface PaginatedMoveDamageClassSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<MoveDamageClassSummary>;
}

export interface PaginatedMoveLearnMethodSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<MoveLearnMethodSummary>;
}

export interface PaginatedMoveMetaAilmentSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<MoveMetaAilmentSummary>;
}

export interface PaginatedMoveMetaCategorySummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<MoveMetaCategorySummary>;
}

export interface PaginatedMoveSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<MoveSummary>;
}

export interface PaginatedMoveTargetSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<MoveTargetSummary>;
}

export interface PaginatedNatureSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<NatureSummary>;
}

export interface PaginatedPalParkAreaSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<PalParkAreaSummary>;
}

export interface PaginatedPokeathlonStatSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<PokeathlonStatSummary>;
}

export interface PaginatedPokedexSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<PokedexSummary>;
}

export interface PaginatedPokemonColorSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<PokemonColorSummary>;
}

export interface PaginatedPokemonFormSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<PokemonFormSummary>;
}

export interface PaginatedPokemonHabitatSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<PokemonHabitatSummary>;
}

export interface PaginatedPokemonShapeSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<PokemonShapeSummary>;
}

export interface PaginatedPokemonSpeciesSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<PokemonSpeciesSummary>;
}

export interface PaginatedPokemonSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<PokemonSummary>;
}

export interface PaginatedRegionSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<RegionSummary>;
}

export interface PaginatedStatSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<StatSummary>;
}

export interface PaginatedSuperContestEffectSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<SuperContestEffectSummary>;
}

export interface PaginatedTypeSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<TypeSummary>;
}

export interface PaginatedVersionGroupSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<VersionGroupSummary>;
}

export interface PaginatedVersionSummaryList {
	count?: number;
	next?: string;
	previous?: string;
	results?: Array<VersionSummary>;
}

export interface PalParkAreaDetail {
	id: number;
	name: string;
	names: Array<PalParkAreaName>;
	pokemon_encounters: Array<{
		base_score: number;
		"pokemon-species": {
			name: string;
			url: string;
		};
		rate: number;
	}>;
}

export interface PalParkAreaName {
	name: string;
	language: LanguageSummary;
}

export interface PalParkAreaSummary {
	name: string;
	url: string;
}

export interface PokeathlonStatDetail {
	id: number;
	name: string;
	affecting_natures: {
		decrease: Array<{
			max_change: number;
			nature: {
				name: string;
				url: string;
			};
		}>;
		increase: Array<{
			max_change: number;
			nature: {
				name: string;
				url: string;
			};
		}>;
	};
	names: Array<PokeathlonStatName>;
}

export interface PokeathlonStatName {
	name: string;
	language: LanguageSummary;
}

export interface PokeathlonStatSummary {
	name: string;
	url: string;
}

export interface PokedexDescription {
	description?: string;
	language: LanguageSummary;
}

export interface PokedexDetail {
	id: number;
	name: string;
	is_main_series?: boolean;
	descriptions: Array<PokedexDescription>;
	names: Array<PokedexName>;
	pokemon_entries: Array<{
		entry_number: number;
		pokemon_species: {
			name: string;
			url: string;
		};
	}>;
	region: RegionSummary;
	version_groups: Array<{
		name: string;
		url: string;
	}>;
}

export interface PokedexName {
	name: string;
	language: LanguageSummary;
}

export interface PokedexSummary {
	name: string;
	url: string;
}

export interface PokemonColorDetail {
	id: number;
	name: string;
	names: Array<PokemonColorName>;
	pokemon_species: Array<PokemonSpeciesSummary>;
}

export interface PokemonColorName {
	name: string;
	language: LanguageSummary;
}

export interface PokemonColorSummary {
	name: string;
	url: string;
}

export interface PokemonDetail {
	id: number;
	name: string;
	base_experience?: any;
	height?: any;
	is_default?: boolean;
	order?: any;
	weight?: any;
	abilities: Array<{
		ability: {
			name: string;
			url: string;
		};
		is_hidden: boolean;
		slot: number;
	}>;
	past_abilities: Array<{
		abilities: Array<{
			ability: {
				name: string;
				url: string;
			};
			is_hidden: boolean;
			slot: number;
		}>;
		generation: {
			name: string;
			url: string;
		};
	}>;
	forms: Array<PokemonFormSummary>;
	game_indices: Array<PokemonGameIndex>;
	held_items: {
		item: {
			name: string;
			url: string;
		};
		version_details: Array<{
			rarity: number;
			version: {
				name: string;
				url: string;
			};
		}>;
	};
	location_area_encounters: string;
	moves: Array<{
		move: {
			name: string;
			url: string;
		};
		version_group_details: Array<{
			level_learned_at: number;
			move_learn_method: {
				name: string;
				url: string;
			};
			version_group: {
				name: string;
				url: string;
			};
		}>;
	}>;
	species: PokemonSpeciesSummary;
	sprites: {
		front_default?: string;
	};
	cries: {
		latest: string;
		legacy: string;
	};
	stats: Array<PokemonStat>;
	types: Array<{
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}>;
	past_types: Array<{
		generation: {
			name: string;
			url: string;
		};
		types: Array<{
			slot: number;
			type: {
				name: string;
				url: string;
			};
		}>;
	}>;
}

export interface PokemonDexEntry {
	entry_number: number;
	pokedex: PokedexSummary;
}

export interface PokemonFormDetail {
	id: number;
	name: string;
	order?: any;
	form_order?: any;
	is_default?: boolean;
	is_battle_only?: boolean;
	is_mega?: boolean;
	form_name: string;
	pokemon: PokemonSummary;
	sprites: {
		default?: string;
	};
	version_group: VersionGroupSummary;
	form_names: Array<{
		language: {
			name: string;
			url: string;
		};
		name: string;
	}>;
	names: Array<{
		language: {
			name: string;
			url: string;
		};
		name: string;
	}>;
	types: Array<{
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}>;
}

export interface PokemonFormSummary {
	name: string;
	url: string;
}

export interface PokemonGameIndex {
	game_index: number;
	version: VersionSummary;
}

export interface PokemonHabitatDetail {
	id: number;
	name: string;
	names: Array<PokemonHabitatName>;
	pokemon_species: Array<PokemonSpeciesSummary>;
}

export interface PokemonHabitatName {
	name: string;
	language: LanguageSummary;
}

export interface PokemonHabitatSummary {
	name: string;
	url: string;
}

export interface PokemonShapeDetail {
	id: number;
	name: string;
	awesome_names: Array<{
		awesome_name: string;
		language: {
			name: string;
			url: string;
		};
	}>;
	names: Array<{
		url: string;
		name: string;
	}>;
	pokemon_species: Array<PokemonSpeciesSummary>;
}

export interface PokemonShapeSummary {
	name: string;
	url: string;
}

export interface PokemonSpeciesDescription {
	description?: string;
	language: LanguageSummary;
}

export interface PokemonSpeciesDetail {
	id: number;
	name: string;
	order?: any;
	gender_rate?: any;
	capture_rate?: any;
	base_happiness?: any;
	is_baby?: boolean;
	is_legendary?: boolean;
	is_mythical?: boolean;
	hatch_counter?: any;
	has_gender_differences?: boolean;
	forms_switchable?: boolean;
	growth_rate: GrowthRateSummary;
	pokedex_numbers: Array<PokemonDexEntry>;
	egg_groups: Array<{
		name: string;
		url: string;
	}>;
	color: PokemonColorSummary;
	shape: PokemonShapeSummary;
	evolves_from_species: PokemonSpeciesSummary;
	evolution_chain: EvolutionChainSummary;
	habitat: PokemonHabitatSummary;
	generation: GenerationSummary;
	names: Array<{
		language: {
			name: string;
			url: string;
		};
		name: string;
	}>;
	pal_park_encounters: Array<{
		area: {
			name: string;
			url: string;
		};
		base_score: number;
		rate: number;
	}>;
	form_descriptions: Array<PokemonSpeciesDescription>;
	flavor_text_entries: Array<PokemonSpeciesFlavorText>;
	genera: Array<{
		genus: string;
		language: {
			name: string;
			url: string;
		};
	}>;
	varieties: Array<{
		is_default: boolean;
		pokemon: {
			name: string;
			url: string;
		};
	}>;
}

export interface PokemonSpeciesFlavorText {
	flavor_text: string;
	language: LanguageSummary;
	version: VersionSummary;
}

export interface PokemonSpeciesSummary {
	name: string;
	url: string;
}

export interface PokemonStat {
	base_stat: number;
	effort: number;
	stat: StatSummary;
}

export interface PokemonSummary {
	name: string;
	url: string;
}

export interface RegionDetail {
	id: number;
	name: string;
	locations: Array<LocationSummary>;
	main_generation: any;
	names: Array<RegionName>;
	pokedexes: Array<PokedexSummary>;
	version_groups: Array<{
		name: string;
		url: string;
	}>;
}

export interface RegionName {
	name: string;
	language: LanguageSummary;
}

export interface RegionSummary {
	name: string;
	url: string;
}

export interface StatDetail {
	id: number;
	name: string;
	game_index: number;
	is_battle_only?: boolean;
	affecting_moves: {
		increase: Array<{
			change: number;
			move: {
				name: string;
				url: string;
			};
		}>;
		decrease: Array<{
			change: number;
			move: {
				name: string;
				url: string;
			};
		}>;
	};
	affecting_natures: {
		increase: Array<{
			name: string;
			url: string;
		}>;
		decrease: Array<{
			name: string;
			url: string;
		}>;
	};
	characteristics: Array<CharacteristicSummary>;
	move_damage_class: MoveDamageClassSummary;
	names: Array<StatName>;
}

export interface StatName {
	name: string;
	language: LanguageSummary;
}

export interface StatSummary {
	name: string;
	url: string;
}

export interface SuperContestEffectDetail {
	id: number;
	appeal: number;
	flavor_text_entries: Array<SuperContestEffectFlavorText>;
	moves: Array<MoveSummary>;
}

export interface SuperContestEffectFlavorText {
	flavor_text: string;
	language: LanguageSummary;
}

export interface SuperContestEffectSummary {
	url: string;
}

/**
 * Serializer for the Type resource
 */
export interface TypeDetail {
	id: number;
	name: string;
	damage_relations: {
		no_damage_to: Array<{
			name: string;
			url: string;
		}>;
		half_damage_to: Array<{
			name: string;
			url: string;
		}>;
		double_damage_to: Array<{
			name: string;
			url: string;
		}>;
		no_damage_from: Array<{
			name: string;
			url: string;
		}>;
		half_damage_from: Array<{
			name: string;
			url: string;
		}>;
		double_damage_from: Array<{
			name: string;
			url: string;
		}>;
	};
	past_damage_relations: Array<{
		generation: {
			name: string;
			url: string;
		};
		damage_relations: {
			no_damage_to: Array<{
				name: string;
				url: string;
			}>;
			half_damage_to: Array<{
				name: string;
				url: string;
			}>;
			double_damage_to: Array<{
				name: string;
				url: string;
			}>;
			no_damage_from: Array<{
				name: string;
				url: string;
			}>;
			half_damage_from: Array<{
				name: string;
				url: string;
			}>;
			double_damage_from: Array<{
				name: string;
				url: string;
			}>;
		};
	}>;
	game_indices: Array<TypeGameIndex>;
	generation: GenerationSummary;
	move_damage_class: MoveDamageClassSummary;
	names: Array<AbilityName>;
	pokemon: Array<{
		slot?: number;
		pokemon?: {
			name?: string;
			url?: string;
		};
	}>;
	moves: Array<MoveSummary>;
	sprites: Record<
		string,
		Record<
			string,
			{
				"name-icon"?: string;
			}
		>
	>;
}

export interface TypeGameIndex {
	game_index: number;
	generation: GenerationSummary;
}

export interface TypeSummary {
	name: string;
	url: string;
}

/**
 * Should have a link to Version Group info but the Circular
dependency and compilation order fight eachother and I'm
not sure how to add anything other than a hyperlink
 */
export interface VersionDetail {
	id: number;
	name: string;
	names: Array<VersionName>;
	version_group: VersionGroupSummary;
}

export interface VersionGroupDetail {
	id: number;
	name: string;
	order?: any;
	generation: GenerationSummary;
	move_learn_methods: Array<{
		name: string;
		url: string;
	}>;
	pokedexes: Array<{
		name: string;
		url: string;
	}>;
	regions: Array<{
		name: string;
		url: string;
	}>;
	versions: Array<VersionSummary>;
}

export interface VersionGroupSummary {
	name: string;
	url: string;
}

export interface VersionName {
	name: string;
	language: LanguageSummary;
}

export interface VersionSummary {
	name: string;
	url: string;
}

export type GetabilityListResponse200 = PaginatedAbilitySummaryList;

export type GetabilityRetrieveResponse200 = AbilityDetail;

export type GetberryListResponse200 = PaginatedBerrySummaryList;

export type GetberryRetrieveResponse200 = BerryDetail;

export type GetberryFirmnessListResponse200 = PaginatedBerryFirmnessSummaryList;

export type GetberryFirmnessRetrieveResponse200 = BerryFirmnessDetail;

export type GetberryFlavorListResponse200 = PaginatedBerryFlavorSummaryList;

export type GetberryFlavorRetrieveResponse200 = BerryFlavorDetail;

export type GetcharacteristicListResponse200 = PaginatedCharacteristicSummaryList;

export type GetcharacteristicRetrieveResponse200 = CharacteristicDetail;

export type GetcontestTypeListResponse200 = PaginatedContestTypeSummaryList;

export type GetcontestTypeRetrieveResponse200 = ContestTypeDetail;

export type GetcontestEffectListResponse200 = PaginatedContestEffectSummaryList;

export type GetcontestEffectRetrieveResponse200 = ContestEffectDetail;

export type GeteggGroupListResponse200 = PaginatedEggGroupSummaryList;

export type GeteggGroupRetrieveResponse200 = EggGroupDetail;

export type GetencounterMethodListResponse200 = PaginatedEncounterMethodSummaryList;

export type GetencounterMethodRetrieveResponse200 = EncounterMethodDetail;

export type GetencounterConditionListResponse200 = PaginatedEncounterConditionSummaryList;

export type GetencounterConditionRetrieveResponse200 = EncounterConditionDetail;

export type GetencounterConditionValueListResponse200 = PaginatedEncounterConditionValueSummaryList;

export type GetencounterConditionValueRetrieveResponse200 = EncounterConditionValueDetail;

export type GetevolutionChainListResponse200 = PaginatedEvolutionChainSummaryList;

export type GetevolutionChainRetrieveResponse200 = EvolutionChainDetail;

export type GetevolutionTriggerListResponse200 = PaginatedEvolutionTriggerSummaryList;

export type GetevolutionTriggerRetrieveResponse200 = EvolutionTriggerDetail;

export type GetgenerationListResponse200 = PaginatedGenerationSummaryList;

export type GetgenerationRetrieveResponse200 = GenerationDetail;

export type GetgenderListResponse200 = PaginatedGenderSummaryList;

export type GetgenderRetrieveResponse200 = GenderDetail;

export type GetgrowthRateListResponse200 = PaginatedGrowthRateSummaryList;

export type GetgrowthRateRetrieveResponse200 = GrowthRateDetail;

export type GetitemListResponse200 = PaginatedItemSummaryList;

export type GetitemRetrieveResponse200 = ItemDetail;

export type GetitemCategoryListResponse200 = PaginatedItemCategorySummaryList;

export type GetitemCategoryRetrieveResponse200 = ItemCategoryDetail;

export type GetitemAttributeListResponse200 = PaginatedItemAttributeSummaryList;

export type GetitemAttributeRetrieveResponse200 = ItemAttributeDetail;

export type GetitemFlingEffectListResponse200 = PaginatedItemFlingEffectSummaryList;

export type GetitemFlingEffectRetrieveResponse200 = ItemFlingEffectDetail;

export type GetitemPocketListResponse200 = PaginatedItemPocketSummaryList;

export type GetitemPocketRetrieveResponse200 = ItemPocketDetail;

export type GetlanguageListResponse200 = PaginatedLanguageSummaryList;

export type GetlanguageRetrieveResponse200 = LanguageDetail;

export type GetlocationListResponse200 = PaginatedLocationSummaryList;

export type GetlocationRetrieveResponse200 = LocationDetail;

export type GetlocationAreaListResponse200 = PaginatedLocationAreaSummaryList;

export type GetlocationAreaRetrieveResponse200 = LocationAreaDetail;

export type GetmachineListResponse200 = PaginatedMachineSummaryList;

export type GetmachineRetrieveResponse200 = MachineDetail;

export type GetmoveListResponse200 = PaginatedMoveSummaryList;

export type GetmoveRetrieveResponse200 = MoveDetail;

export type GetmoveAilmentListResponse200 = PaginatedMoveMetaAilmentSummaryList;

export type GetmoveAilmentRetrieveResponse200 = MoveMetaAilmentDetail;

export type GetmoveBattleStyleListResponse200 = PaginatedMoveBattleStyleSummaryList;

export type GetmoveBattleStyleRetrieveResponse200 = MoveBattleStyleDetail;

export type GetmoveCategoryListResponse200 = PaginatedMoveMetaCategorySummaryList;

export type GetmoveCategoryRetrieveResponse200 = MoveMetaCategoryDetail;

export type GetmoveDamageClassListResponse200 = PaginatedMoveDamageClassSummaryList;

export type GetmoveDamageClassRetrieveResponse200 = MoveDamageClassDetail;

export type GetmoveLearnMethodListResponse200 = PaginatedMoveLearnMethodSummaryList;

export type GetmoveLearnMethodRetrieveResponse200 = MoveLearnMethodDetail;

export type GetmoveTargetListResponse200 = PaginatedMoveTargetSummaryList;

export type GetmoveTargetRetrieveResponse200 = MoveTargetDetail;

export type GetnatureListResponse200 = PaginatedNatureSummaryList;

export type GetnatureRetrieveResponse200 = NatureDetail;

export type GetpalParkAreaListResponse200 = PaginatedPalParkAreaSummaryList;

export type GetpalParkAreaRetrieveResponse200 = PalParkAreaDetail;

export type GetpokedexListResponse200 = PaginatedPokedexSummaryList;

export type GetpokedexRetrieveResponse200 = PokedexDetail;

export type GetpokemonListResponse200 = PaginatedPokemonSummaryList;

export type GetpokemonRetrieveResponse200 = PokemonDetail;

export type GetpokemonColorListResponse200 = PaginatedPokemonColorSummaryList;

export type GetpokemonColorRetrieveResponse200 = PokemonColorDetail;

export type GetpokemonFormListResponse200 = PaginatedPokemonFormSummaryList;

export type GetpokemonFormRetrieveResponse200 = PokemonFormDetail;

export type GetpokemonHabitatListResponse200 = PaginatedPokemonHabitatSummaryList;

export type GetpokemonHabitatRetrieveResponse200 = PokemonHabitatDetail;

export type GetpokemonShapeListResponse200 = PaginatedPokemonShapeSummaryList;

export type GetpokemonShapeRetrieveResponse200 = PokemonShapeDetail;

export type GetpokemonSpeciesListResponse200 = PaginatedPokemonSpeciesSummaryList;

export type GetpokemonSpeciesRetrieveResponse200 = PokemonSpeciesDetail;

export type GetpokeathlonStatListResponse200 = PaginatedPokeathlonStatSummaryList;

export type GetpokeathlonStatRetrieveResponse200 = PokeathlonStatDetail;

export type GetregionListResponse200 = PaginatedRegionSummaryList;

export type GetregionRetrieveResponse200 = RegionDetail;

export type GetstatListResponse200 = PaginatedStatSummaryList;

export type GetstatRetrieveResponse200 = StatDetail;

export type GetsuperContestEffectListResponse200 = PaginatedSuperContestEffectSummaryList;

export type GetsuperContestEffectRetrieveResponse200 = SuperContestEffectDetail;

export type GettypeListResponse200 = PaginatedTypeSummaryList;

export type GettypeRetrieveResponse200 = TypeDetail;

export type GetversionListResponse200 = PaginatedVersionSummaryList;

export type GetversionRetrieveResponse200 = VersionDetail;

export type GetversionGroupListResponse200 = PaginatedVersionGroupSummaryList;

export type GetversionGroupRetrieveResponse200 = VersionGroupDetail;

export type GetpokemonEncountersRetrieveResponse200 = Array<{
	location_area: {
		name: string;
		url: string;
	};
	version_details: Array<{
		encounter_details: Array<{
			chance: number;
			condition_values: Array<{
				name: string;
				url: string;
			}>;
			max_level: number;
			method: {
				name: string;
				url: string;
			};
			min_level: number;
		}>;
		max_chance: number;
		version: {
			name: string;
			url: string;
		};
	}>;
}>;
