export interface RawHtml {
	rawHtml: string;
}

export function RawHtmlElement({rawHtml}: RawHtml): JSX.Element {
	return <div dangerouslySetInnerHTML={{__html: rawHtml}} />;
}
