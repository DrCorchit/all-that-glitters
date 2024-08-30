import {Link} from "react-router-dom";
import Chapter from "../../components/Chapter";
import {chapters} from "../../components/ChapterInfo";
import {ChapterLink} from "../../components/InternalLink";
import Section from "../../components/Section";
import Sub from "../../components/Sub";
import {damageTypes, DamageType} from "../../concepts/damageType";
import {statuses, StatusEffect} from "../../concepts/statusEffect";
import Outline from "../../components/Outline";
import statusRecoveries from "../../generated/statusRecovery";
import statusEffects from "../../generated/statusEffects";
import {stat} from "fs";

const index = 5;
const info = chapters.array[index - 1];

function Intro(): JSX.Element {
	return (
		<>
			<p>
				Combat is pure chaos. It's nothing like the movies; you won't find any choreographed fencing with somersaults
				and pirouettes, dramatic music, or witty banter. Real combat is full of noise and blood and grime, broken bones,
				and the screams of the dying—or the eerie silence of the dead. Be that as it may, mortal combat is actually the
				most refined form of problem-solving on a great many worlds. So you'd better get good at it.
			</p>
			<p>
				In order to make sense out of chaos, the battlefield is represented with a grid and time is divided into{" "}
				<i>turns</i> and <i>rounds</i>. Each grid square represents a six foot (or 2 meter) square of terrain, while a
				turn of combat captures a single fighter doing their best to kill and not be killed for a single 6-second
				snapshot of time. Finally, a round is completed when all combatants have completed their turn. Once combat has
				started, it continues through as many rounds as it needs to until only one faction remains, and all others have
				either surrendered, fled, or perished. Then it ends, as quickly as it began.
			</p>
			<p>Here's everything you need to know about combat:</p>
		</>
	);
}

function BattlefieldSection(): JSX.Element {
	return (
		<Section name={info.sections[0]}>
			<p>Battles are usually represented in one of three ways:</p>
			<ul>
				<li>A battlemap, with minis or markers representing the combatants</li>
				<li>A Virtual Tabletop (VTT)</li>
				<li>Theater of the Mind, with positioning described verbally by the DM</li>
			</ul>
			<p>
				Each of these methods has its advantages and drawbacks, but a physical battlemap offers the best experience in
				my opinion. Players have a visual and tactile representation of the battlefield, and there are no technical
				difficulties to worry about like websockets and port forwarding. The main downside of battlemaps is that they
				can become a bit expensive, and they only work for in-person sessions.
			</p>
			<p>
				When playing on a battlemap or a virtual tabletop, the battlefield is represented as a rectangular grid. Most
				combatants occupy one grid square and can move or attack into any of these eight adjoining squares, unless the
				square is impassible or contains some sort of hazard. Large and huge combatants may occupy more than one square.
			</p>
			<p>
				When playing without a battlemap, the DM verbally describes the layout of the battlefield, including the
				positioning of any hazards or attackers the characters can see. Players respond by describing their intended
				actions, or asking questions about what moves are or are not available. Combat proceeds in a similar way as when
				there is a battlemap, although complex positioning and tactics are not practically viable.
			</p>
		</Section>
	);
}

function BeginningSection(): JSX.Element {
	return (
		<Section name={info.sections[1]}>
			<h5>Initiative</h5>
			<p>
				Combat begins with a skill check, as both players and npc combatants roll for initiative. This determines move
				order, with higher scores moving first. Rolling for initiative is an ordinary event roll, and all other rules
				such as proficiency bonuses apply. When a monster and a player roll the same initiative, players move first. Two
				players rolling the same initiative may either reach an agreement about who moves first or roll a d20 to decide,
				while monsters rolling the same initiative move in whatever order the storyteller decides.
			</p>
			<h5>Recognition</h5>
			<p>
				The storyteller may decide to ask players to roll for recognition to see the stats of the monsters they are
				about to fight. This normally includes their HP, willpower, attributes, mitigation, and some of their spells,
				attacks, or abilities. This check depends on the survival skill and its difficulty is determined by the rarity
				of the monsters in question:
			</p>
			<table className='default'>
				<thead>
					<tr>
						<th>Monster Rarity</th>
						<th>Interpretation</th>
						<th>Typical DT</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Common</td>
						<td>
							The monster's physicalities are thoroughly documented in literature, and it is encountered by humans
							somewhat frequently.
						</td>
						<td>18</td>
					</tr>
					<tr>
						<td>Rare</td>
						<td>
							The monster has been seen before, but not studied thoroughly. It may have been years to decades since the
							last sighting.
						</td>
						<td>24</td>
					</tr>
					<tr>
						<td>Legendary</td>
						<td>
							The monster has not been sighted in perhaps a century or more. Many doubt that it still exists, or ever
							existed.
						</td>
						<td>30</td>
					</tr>
					<tr>
						<td>Exotic</td>
						<td>No human has ever seen the monster and lived to tell the tale.</td>
						<td>Impossible</td>
					</tr>
				</tbody>
			</table>
			<p>
				The recognition roll is normally made with disadvantage if the area is obscured by heavy fog or darkness.
				Conversely, players may roll with advantage if attempting to discern monsters that emit distinctive noises or
				smells. If successful, the players gain knowledge of the monster's HP, mitigation, and any other information the
				storyteller chooses to reveal. If there are several monsters attacking together, the roll should be done in one
				go rather than rolling recognition separately for each unique type of monster in the encounter.
			</p>
			<p style={{marginLeft: "25px"}}>
				Note: Sometimes, players may have a chance to view their enemies from a distance before they are recognized. In
				this case, they may roll for recognition before combat begins, typically with advantage.
			</p>
			<h5>Surprise</h5>
			<p>
				During an ambush or surprise attack, sometimes the defenders are so completely discombobulated that they are
				unable to react decisively. This condition is called <i>surprise</i> and has the following effects:
			</p>
			<ul>
				<li>Defenders cannot make recognition rolls</li>
				<li>Defenders make their initiative rolls with disadvantage.</li>
				<li>Defenders cannot take reactions until their first turn.</li>
				<li>
					Any attackers which move before <i>all</i> defenders may take part in a bonus combat round, giving them an
					extra chance to attack.
				</li>
			</ul>
			<p>
				Surprise is triggered if the ambushing party succeeds a stealth check against the defending party. If the
				attackers have already succeeded a stealth check, they do not need to make an additional one. See{" "}
				<ChapterLink chapter={6} target='sneaking' /> for more information on stealth tactics.
			</p>
		</Section>
	);
}

function ActionSection(): JSX.Element {
	return (
		<Section name={info.sections[2]}>
			<p>
				Each combatant gains two actions at the beginning of combat and at the end of their turn, which can be used to
				attack, move, or cast spells, and so forth. A player's turn ends when they have exhausted all of their actions,
				unless they end it early. There are no bonus actions or moves that cost less than one action, but some feats or
				class abilities allow players to combine two abilities into a single action. Unused actions carry over at the
				end of each player's turn, but no player can have more than 3 actions at a time under normal circumstances.
				Monsters may have more or fewer actions than human players, but otherwise their combat turns proceed in
				essentially the same way.
			</p>
			<h5 id='acting'>Acting</h5>
			<p>The following chart displays some actions and reactions typically available to players:</p>
			<table className='default'>
				<thead>
					<tr>
						<th>Action</th>
						<th>Cost</th>
						<th>Effect</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Attack</td>
						<td>1 Action</td>
						<td>
							The character attacks with their main-hand weapon. Their dodge chance is{" "}
							<ChapterLink chapter={index} target='attacking'>
								reduced accordingly
							</ChapterLink>
							.
						</td>
					</tr>
					<tr>
						<td>Spell</td>
						<td>1 Action</td>
						<td>The character casts a spell with one hand.</td>
					</tr>
					<tr>
						<td>Grapple</td>
						<td>2 Actions</td>
						<td>
							The character attempts to wrestle an enemy, rendering them incapable of taking actions or reactions.
						</td>
					</tr>
					<tr>
						<td>Help</td>
						<td>2 Actions</td>
						<td>
							The character moves up to 6 feet and attempts to rouse an unconscious person, or assist them with an
							assailant or condition. By passing a difficulty 10 <Sub skill='medicine' /> check, the one being helped
							gains 1d6 hp.
						</td>
					</tr>
					<tr>
						<td>Block</td>
						<td>1 Action</td>
						<td>
							The player uses their shield to block incoming attacks until the start of their next turn, doubling the BC
							from their shield.
						</td>
					</tr>
					<tr>
						<td>Parry</td>
						<td>1 Reaction</td>
						<td>The player attempts to use their melee weapon to deflect incoming attacks.</td>
					</tr>
					<tr>
						<td>Opportunity Attack</td>
						<td>1 Reaction</td>
						<td>The player attacks a monster that is moving out of engagement range.</td>
					</tr>
					<tr>
						<td>Move</td>
						<td>1 Action</td>
						<td>The character gains movement points equal to half their speed score.</td>
					</tr>
					<tr>
						<td>Jog</td>
						<td>1 Action and 1 willpower, or 2 Actions</td>
						<td>The character gains movement points equal to their speed score.</td>
					</tr>
					<tr>
						<td>Dodge</td>
						<td>1 Action</td>
						<td>
							The character moves with deliberate caution, to avoid incoming attacks. They no longer provoke opportunity
							attacks, and Dodge Chance is increased by 2.
						</td>
					</tr>
					<tr>
						<td>Jump</td>
						<td>5 movement points</td>
						<td>The player jumps across the battlefield, gaining height and bypassing obstacles.</td>
					</tr>
				</tbody>
			</table>
			<h5 id='reactions'>Reacting</h5>
			<p>
				Reactions are moves a character makes in response to specific triggers, such as an enemy moving into or out of
				melee range. Characters use reactions outside of their turn, as long as they have enough actions required to do
				so. Common examples of reactions include parrying, blocking with a shield, and making opportunity attacks.
			</p>
			<p>
				Whenever one character makes a melee attack against another, they become <i>engaged</i>. While engaged, neither
				character can run away without provoking an opportunity attack from the other. Since it is a reaction, an
				opportunity attack is made outside the attacker's turn. Other than being a reaction, an opportunity attack is an
				ordinary melee attack, and can be made by both players and monsters without special training.
			</p>
			<h5 id='attacking'>Attacking</h5>
			<p>
				Attacks are handled in two parts, the first being an attack roll to determine whether the attack connects, and
				the second being a damage roll to determine how much damage is dealt. The attack roll is an ordinary skill
				check, usually <Sub skill='martial_arts' /> for melee attacks and <Sub skill='accuracy' /> for ranged. The
				difficulty of the attack roll is the mitigation stat of the target.
			</p>
			<p>
				To determine the damage of an attack that has connected, roll the weapon’s damage dice and add your{" "}
				<ChapterLink chapter={3} target='modifier'>
					attribute modifier
				</ChapterLink>{" "}
				for that weapon's attribute (usually strength). For example, if your character has 14 strength and attacks with
				a cutlass, you would roll the weapon's damage die (a d6) and add 4 damage. If you rolled a 3, you would deal 7
				damage: 3 from the die, and 4 from your strength modifier. To give another example, a pike has a damage die of
				1d12 and either speed or strength may be used as its attribute. A character with 12 strength and 14 speed would
				add their speed modifier to the polearm's damage die of 1d12. If they rolled an 8 on the 1d12, they would deal a
				total of 12 damage: 8 from the die, and 4 from their speed modifier.
			</p>
			<p>
				Attack rules for spells are similar, but vary depend on the precise spell in question. Some spells bypass
				ordinary mitigation or hit an entire area at once. In such cases, the target usually makes a saving throw to
				avoid full damage, rather than the caster trying to pass an ability check to cast the spell.
			</p>
			<h5 id='critical_hits'>Critical Hits</h5>
			<p>
				Not all attacks are created equal. Sometimes a blade strikes exceptionally true, piercing all defenses. When
				this happens, the blow is called a critical hit. Critical hits are triggered when the attacker rolls above the
				<i>critical threshold</i> (abbreviated CT) on the attack roll before any bonuses including proficiencies are
				applied. Normally the CT is 20, but certain bonuses lower the threshold making it easier to score critical hits.
			</p>
			<p>When a critical hit lands, a few special rules apply:</p>
			<ul>
				<li>The attack always connects, even if the enemy's MIT is higher than the total value rolled.</li>
				<li>Damage is doubled.</li>
				<li>If there is only one damage die for the attack, you can roll it twice and take the higher value.</li>
			</ul>
			<h5 id='defending'>Defending</h5>
			<p>
				Defenders can increase their MIT temporarily by blocking (with an action), parrying (with a reaction), or
				attempting to dodge (with an action). A few special rules apply to blocking and parrying:
			</p>
			<ul>
				<li>
					It is not possible to block and parry in the same turn. Blocking prevents parrying from being taken as a
					reaction.
				</li>
				<li>
					A defender can choose which attack to parry, but cannot choose to parry an attack after the attack roll for
					that attack has already been made.
				</li>
				<li>The dodge action allows you to disengage from enemy attacks without triggering opportunity attacks.</li>
			</ul>
			<h5 id='moving'>Moving</h5>
			<p>
				When taking the move action, characters gain movement points equal to half their speed attribute score. When
				moving around on a rectangular battle grid, players expend 1 movement point for every vertical, horizontal, or
				diagonal move. Optionally, players can opt to use fractional movement points. Under this system, diagonal
				movement costs 1.5 movement points, effectively making the set of reachable tiles more circular. This makes odd
				speed scores more useful, but increases the complexity of maneuvering. In any case, a character cannot enter a
				tile unless they have the required amount of movement points remaining. For example, a character with 5.5
				movement points would be able to move at most 5 tiles horizontally or vertically, not 6.
			</p>
			<h5 id='grappling'>Grappling</h5>
			<p>
				A player can attempt to grapple an enemy by using two actions. The attacker and the defender then both roll a
				<Sub skill='martial arts' /> skill check, with the grapple succeeding if the attacker's score is greater than or
				equal to the defender's score. Once grappled, the defender cannot take actions or reactions during their turn.
				However, they can reroll their martial arts check once each turn, until their score is higher than the score
				rolled by the attacker. At this point, they are no longer grappled and will be able to move and act normally on
				their next turn.
			</p>
			<p style={{marginLeft: "25px"}}>
				Note: Relative size affects grappling chances, as follows: If a character attempts to grapple an enemy that is
				smaller than themselves, they gain advantage on the martial arts check. If they attempt to grapple an enemy
				larger than themselves, they gain disadvantage. No character may grapple a character more than one size class
				larger than they are.
			</p>
			<p>During a grapple, a few special rules take effect:</p>
			<ul>
				<li>The DC of both combatants is reduced to zero, lowering their MIT.</li>
				<li>The grappled character's BC is added to the attacker's BC.</li>
				<li>
					The grappled character acts as a meatshield, taking full damage from failed attacks against the grappling
					character.
				</li>
				<li>
					A character can attempt to break an ally free from being grappled by using the help action. When this happens,
					the grappler and the character giving help both roll for martial arts. If the grappler rolls lower, the
					grapple condition ends.
				</li>
			</ul>
			<p>
				If a player is grappling an enemy at the start of their turn, their moveset is restricted to the following
				actions:
			</p>
			<p>
				<b>Dragging</b>: The character moves at half speed, bringing the grappled foe along with them.
			</p>
			<p>
				<b>Throwing</b> costs 2 actions. The player makes a strength check with a difficulty equal to the enemy's
				strength score. If successful, the throw distance is 5 feet plus an additional foot for every point their
				strength check exceeded the enemy's strength score.
			</p>
			<p>
				<b>Regrappling</b> costs an action and allows the grappler to reroll the initial martial arts check, potentially
				increasing the difficulty of the defender's check to break free on subsequent turns. However, if the new grapple
				score is lower than the defender's original grapple score, the defender immediately breaks free from the
				grapple. Regrappling is mainly useful if the attacker's initial grapple score was lower than expected, and the
				defender is likely to break out on future turns.
			</p>
			<p>
				<b>Releasing</b> an enemy costs no effort, and the grappler can move and attack as normal on their turn. They
				will have to pass another martial arts check to grapple the enemy again, but have advantage on attack rolls
				against that creature for the rest of their turn.
			</p>
		</Section>
	);
}

function DefeatSection(): JSX.Element {
	return (
		<Section name={info.sections[3]}>
			<p>
				When a monster or player character loses all their hitpoints, they can no longer fight and fall unconscious.
				What happens to a player character at this point depends on whether you are playing according to permadeath or
				modern rules.
			</p>
			<p>
				Under permadeath rules, downed players rolls a DT 12 <Sub skill='survival' /> saving throw on their turn. After
				three saves, they become stable and do not need to make additional saves to stay alive. However, if a character
				accumulates three fails, they are dead and can only be revived by powerful resurrection magic. Under this
				system, players can be revived and resume fighting after being healed by any healing spell, as long as they have
				not actually died.
			</p>
			<p style={{marginLeft: "25px"}}>
				Note: Under permadeath rules, rolling a natural 20 immediately causes the player to become stable.
			</p>
			<p>
				The modern rules offer an alternative system where unconscious players do not need to make saving throws to stay
				alive. However, they also do not regain consciousness after being healed by healing magic. Instead, they regain
				consciousness 1d4 hours after combat is over.
			</p>
			<p>
				In gameplay strategy, modern rules prioritize keeping the characters conscious, making single-target healing
				spells quite valuable. Permadeath rules favor mass healing spells that resurrect the character whenever they
				fall. You should think carefully about which system works best for you.
			</p>
		</Section>
	);
}

function DamageTypesSection(): JSX.Element {
	return (
		<Section name={info.sections[4]}>
			<p>
				Smashing, slashing, poisoning, burning… There are quite a few ways to do someone in. When damage is dealt by an
				attack or spell, it always comes with a damage type that modifies the original effect. Here's a list of damage
				types and their unique effects:
			</p>
			<ul>
				{damageTypes.array.map((damageType, index) => (
					<DamageTypeElement damageType={damageType} key={index} />
				))}
			</ul>
			<p>A few notes on damage types:</p>
			<ul>
				<li>
					When a character takes force damage exceeding their strength score, they must make a strength saving throw
					with DT equal to the force damage dealt or be knocked prone.
				</li>
				<li>
					Metal armor protects the wearer from lightning damage by acting as a
					<Link to='https://www.youtube.com/watch?v=eNxDgd3D_bU'>faraday cage</Link>.
				</li>
				<li>
					Successful attacks with acid decrease the target's BC by 1, until zero. The armor can be repaired at a
					blacksmith for 20 gold per BC lost.
				</li>
				<li>
					Good-aligned characters possess resistance to holy damage, and vulnerability to profane damage. Conversely,
					evil-aligned characters and the undead possess resistance to profane damage and vulnerability to holy damage.
				</li>
			</ul>
			<h5>Vulnerability, Resistance, and Immunity</h5>
			<p>
				Besides their inherent effects, damage types may deal differing amounts of damage to creatures depending on
				their vulnerabilities. Every creature has one of four levels of vulnerability to each damage type, modifying
				incoming damage of that type as follows:
			</p>
			<table className='default'>
				<tbody>
					<tr>
						<td>Vulnerable</td>
						<td>Damage is doubled</td>
					</tr>
					<tr>
						<td>Normal</td>
						<td>No effect</td>
					</tr>
					<tr>
						<td>Resistant</td>
						<td>Damage is halved</td>
					</tr>
					<tr>
						<td>Immune</td>
						<td>Damage is voided</td>
					</tr>
				</tbody>
			</table>
		</Section>
	);
}

function DamageTypeElement({damageType}: {damageType: DamageType}): JSX.Element {
	return (
		<p>
			<span style={{fontSize: "12pt", color: damageType.color}}>
				<b>{damageType.name}</b>
			</span>
			<br />
			{damageType.effect}
			<br />
			Inflicted by: {damageType.sources}
		</p>
	);
}

function StatusEffectsSection(): JSX.Element {
	return (
		<Section name={info.sections[5]}>
			<p>
				Sometimes characters fall prey to certain temporary conditions that reduce their effectiveness in combat. These
				conditions are called status effects and begin and end under certain conditions. Also, some status effects can
				accumulate, meaning they can be inflicted multiple times on the same character.
			</p>
			<table className='default'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Effect</th>
						<th>Causes</th>
						<th>Counterplay</th>
						<th>Notes</th>
					</tr>
				</thead>
				<tbody>
					{statuses.array.map((status, index) => (
						<StatusEffectElement status={status} key={index} />
					))}
				</tbody>
			</table>

			<p>Notes:</p>
			<ul>
				<li>1 point of healing cancels out 1 point of bleeding.</li>
				<li>
					When using the help action to treat bleeding, the character providing assistance must pass a{" "}
					<Sub skill='medicine' /> check (difficulty equal to twice the bleeding amount). On a success, bleeding is
					reduced by half.
				</li>
				<li>
					Freezing and burning status effects are mutually exclusive. One turn of freezing cancels out one turn of
					burning, and vice versa.
				</li>
			</ul>
		</Section>
	);
}

function StatusEffectElement({status}: {status: StatusEffect}): JSX.Element {
	return (
		<tr>
			<td>{status.name}</td>
			<td>{statusEffects.lookup(status.name)}</td>
			<td>{status.causes}</td>
			<td>{statusRecoveries.lookup(status.name)}</td>
			<td>{status.notes}</td>
		</tr>
	);
}

export default function Chapter5(): JSX.Element {
	return (
		<Chapter index={index}>
			<Intro />
			<Outline sections={info.sections} />
			<BattlefieldSection />
			<BeginningSection />
			<ActionSection />
			<DefeatSection />
			<DamageTypesSection />
			<StatusEffectsSection />
		</Chapter>
	);
}
