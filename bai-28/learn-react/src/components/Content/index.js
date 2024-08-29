function Content(props) {
	const { text, number, active } = props;
  return (
		<>
			<div className={"box " + (active ? "box--active" : "")}>
				{text} - {number}
			</div>
		</>
	);
}

export default Content;
