//Auto-generated file (do not modify)
import React from "react";
import {TSXDirectory} from "../utils/tsxDirectory";
import Sub from "../components/Sub";

export const attack = <div className="default">You attack with your main-hand weapon. Your dodge change is reduced accordingly.</div>

export const spell = <div className="default">You cast a spell.</div>

export const grapple = <div className="default">You attempt to wrestle an enemy, rendering them incapable of taking actions or reactions.</div>

export const help = <div className="default">You move up to 6 feet and attempt to rouse an unconscious person, or assist an ally with an assailant or condition. By passing a difficulty 10 <Sub skill="Medicine" /> check, the one you help gains 1d6 hp.</div>

export const block = <div className="default">You use your shield to block incoming attacks, increasing your BC until the start of your next turn.</div>

export const parry = <div className="default">You attempt to use your melee weapon to deflect an incoming melee attack.</div>

export const opportunity_attack = <div className="default">You attack an enemy that is moving out of engagement range.</div>

export const rest = <div className="default">You take a moment to gather you wits and redouble your resolve. Gain 1 willpower.</div>

export const dodge = <div className="default">You move with deliberate caution, to evade incoming attacks. You no longer provoke opportunity attacks, and your DC is increased by 2.</div>

export const move = <div className="default">You can move a number of feet equal to thrice your speed attribute score.</div>

export const jog = <div className="default">You can move a number of feet equal to six times your speed attribute score.</div>

export const leap = <div className="default">You leap across the battlefield, clearing a height of one third your speed score and a distance one half your speed score, in feet. If this action is taken after a move action, the horizontal distance is doubled.</div>

export const actionDescriptions = new TSXDirectory<React.JSX.Element>();

actionDescriptions.register("attack", attack)

actionDescriptions.register("spell", spell)

actionDescriptions.register("grapple", grapple)

actionDescriptions.register("help", help)

actionDescriptions.register("block", block)

actionDescriptions.register("parry", parry)

actionDescriptions.register("opportunity_attack", opportunity_attack)

actionDescriptions.register("rest", rest)

actionDescriptions.register("dodge", dodge)

actionDescriptions.register("move", move)

actionDescriptions.register("jog", jog)

actionDescriptions.register("leap", leap)