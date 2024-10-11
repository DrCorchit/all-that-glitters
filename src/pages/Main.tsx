import {Link} from "react-router-dom";
import {SheetLink, SheetLink2} from "../components/InternalLink";
import {ATG} from "../components/text/ATG";
import {Subtitle} from "../components/text/Subtitle";
import {Line} from "../components/Line";

function MainPage() {
	return (
		<>
			<ATG />
			<Line color='yellow' />
			<Subtitle>A Fantasy Renaissance Tabletop Role-Playing Game</Subtitle>
			<Line color='yellow' />
			<p>
				All That Glitters is a fantasy tabletop role-playing game set in a world inspired by the late medieval to early
				renaissance period. There's fantasy races like dwarves and elves, knights in shining armor, a sprinkling of
				gunpowder, and an entire spectrum of magical spells and combat feats. Central to the game is the call to
				adventure, as souls of every stripe leave behind the comfortable and familiar in order to bravely explore the
				unknown, fight evil, or find their fortune—often all three at once!
			</p>
			<p style={{textAlign: "center"}}>
				<b>What's unique about All That Glitters?</b>
			</p>
			<p>
				All That Glitters is designed to emulate the creative essence loved by fans of Dungeons and Dragons while
				solving some of its design flaws and avoiding the aggressive monetization practices that plague the modern
				version of the game. By design, the game will feel a great deal like DnD, although it also brings plenty of new
				ideas to the table. Here's some things that are unique to All That Glitters:
			</p>
			<ul>
				<li>Streamlined character creation: making characters is easy for players and storytellers alike.</li>
				<li>Open-ended character leveling, with significant freedom even when building non-magical characters.</li>
				<li>A focus on historical accuracy with respect to weapons, armor, combat techniques.</li>
				<li>An emphasis on offline play: the game is playable with a pen, paper, and polyhedral dice.</li>
			</ul>
			<p style={{textAlign: "center"}}>
				<b>If you're interested, here's how to get started:</b>
			</p>
			<p>
				Players and storytellers should read the <Link to='chapters'>Player's Handbook</Link>, which explains the basic
				rules of the game.
				<br />
				If you're interested in running a game, you should also read the <Link to='dmg_toc'>Storyteller's Guide</Link>.
				(Coming soon!)
				<br />
				Character sheets are available <SheetLink>here</SheetLink> with an optional second page available{" "}
				<SheetLink2>here</SheetLink2>.
			</p>
			<ATG>...Is Not Gold!</ATG>
			<Subtitle>Thank you for reading.</Subtitle>
		</>
	);
}

export default MainPage;
