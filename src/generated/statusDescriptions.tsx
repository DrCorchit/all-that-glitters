//Auto-generated file (do not modify)
import React from "react";
import {TSXDirectory} from "../utils/tsxDirectory";
import Sub from "../components/Sub";

export const bleeding = <div className="default">Accumulates. The target takes damage at the end of its turn equal to its bleeding amount, then loses one level of bleeding.</div>

export const blinded = <div className="default">The target cannot see, has disadvantage on attack rolls, and automatically fails any ability checks and saving throws based on sight.</div>

export const burning = <div className="default">Accumulates. Characters take 1d4 damage at the end of their turn, then lose one level of burning. If accumulated burning exceeds the target's <Sub attr="STR"/> score at the start of their turn, they are incapacitated for that turn.</div>

export const deafened = <div className="default">The target cannot hear, and automatically fails ability checks and saving throws based on hearing.</div>

export const incapacitated = <div className="default">The target cannot take actions or reactions, and automatically fails ability checks and saving throws. DC is reduced to zero.</div>

export const intoxicated = <div className="default">Accumulates. Reduces <Sub attr="DEX"/> and <Sub attr="INT"/> by 1 for every level. The target becomes incapacitated and falls unconscious for 1d4 hours when intoxication level exceeds <Sub attr="STR"/> score.</div>

export const terrified = <div className="default">Terrified beyond rational measure, the target is compelled to take the move away from the source of its fear each turn before taking any other actions.</div>

export const dazed = <div className="default">The target cannot take reactions, and has disadvantage on all saving throws.</div>

export const prone = <div className="default">The target cannot move or take actions that require both hands. DC is reduced by half. Ranged attacks against prone creatures have disadvantage.</div>

export const lethargic = <div className="default">The target must expend willpower to take the move action. All willpower is exhuasted if traveling more than one mile on foot. The target also has disadvantage on skill checks and saving throws.</div>

export const madness = <div className="default">Temporarily insane, the target's <Sub attr="INT"/> and <Sub attr="CHA"/> scores are reduced by half, and their speech comes out as incoherent babbling. The target must also make a DT 18 <Sub attr="NST"/> saving throw or else immediately attack the nearest creature. Unless otherwise specified, the condition lasts for 1d4 turns.</div>

export const restrained = <div className="default">The target cannot move and their DC is reduced by half. They also have disadvantage when making melee and ranged attacks.</div>

export const freezing = <div className="default">Accumulates. The target's <Sub attr="DEX"/> is reduced by 1 for each turn of accumulated freezing. Freezing decreases by 1 at the end of every turn.</div>

export const frozen = <div className="default">The target is encased in ice and incapacitated. They become vulnerable to <span style={{color: "#D00"}}>Force</span> and <span style={{color: "#888"}}>Bludgeoning</span>, but resistant to all other forms of damage.</div>

export const petrified = <div className="default">The target is incapacitated and becomes vulnerable to <span style={{color: "#D00"}}>Force</span> and <span style={{color: "#888"}}>Bludgeoning</span>, but immune to all other forms of damage.</div>

export const poisoned = <div className="default">After a set amount of time, the poison takes hold. The exact effect depends on the type of poison.</div>

export const levitated = <div className="default">The target is levitating, unable to plant their feet firmly on the ground. The target cannot move by mundane means, or make melee attacks.</div>

export const invisibility = <div className="default">The target cannot be seen or detected via light sources, including magical light sources. The target has advantage when attempting to hide or make melee attacks. Enemies attempting to make melee or ranged attacks against the target have disadvantage.</div>

export const ephemeral_invisibility = <div className="default">A fragile form of invisibility that dispels at anything more than a slight touch. When interacting with objects (such a handling a bow or opening a door), the target must make a DT 16 <Sub attr="DEX"/> saving throw or lose invisibility. The target also loses invisibility after making a melee attack or being attacked. The target otherwise gains all the benefits of true invisibility.</div>

export const statusDescriptions = new TSXDirectory<React.JSX.Element>();

statusDescriptions.register("bleeding", bleeding)

statusDescriptions.register("blinded", blinded)

statusDescriptions.register("burning", burning)

statusDescriptions.register("deafened", deafened)

statusDescriptions.register("incapacitated", incapacitated)

statusDescriptions.register("intoxicated", intoxicated)

statusDescriptions.register("terrified", terrified)

statusDescriptions.register("dazed", dazed)

statusDescriptions.register("prone", prone)

statusDescriptions.register("lethargic", lethargic)

statusDescriptions.register("madness", madness)

statusDescriptions.register("restrained", restrained)

statusDescriptions.register("freezing", freezing)

statusDescriptions.register("frozen", frozen)

statusDescriptions.register("petrified", petrified)

statusDescriptions.register("poisoned", poisoned)

statusDescriptions.register("levitated", levitated)

statusDescriptions.register("invisibility", invisibility)

statusDescriptions.register("ephemeral_invisibility", ephemeral_invisibility)