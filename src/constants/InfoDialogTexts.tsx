import React from 'react';
/* eslint-disable */
//Info Texts
export const DecisionOptionInfo = (
	<div>
		<h1
			style={{
				textAlign: 'left',
			}}
		>
			Decision Options
		</h1>
		<p>
			Input every decision option that is necessary.
			<br />
			An example might look like:
		</p>
		<ul>
			<li>Investing in BTC</li>
			<li>Investing in blue-chip stocks</li>
			<li>Don't invest at all</li>
		</ul>
		<p>
			<br />
			Write both decision options in case of a binary decision (Y/N). <br />
		</p>
	</div>
);

export const SelectionCriteriaInfo = (
	<div>
		<h1
			style={{
				textAlign: 'left',
			}}
		>
			Selection Criteria
		</h1>
		<p>Input every selection criteria that plays a role in your decision.</p>
		<p>
			An example might look like:
			<ul>
				<li>Lack of cashflow</li>
				<li>Long term profit</li>
				<li>Short term profit</li>
			</ul>
		</p>
	</div>
);

export const WeightCriteriaInfo = (
	<div>
		<h1
			style={{
				textAlign: 'left',
			}}
		>
			Weight Criteria
		</h1>
		<p>
			Decisions require always trade-offs.
			<br />
			Which criteria is most important?
			<br />
			<br />
			Move the slider to the left or right depending on what is more important to you.
			<br />
			The distance moved in the slider is proportional to the importance of criteria compared to others.
		</p>
	</div>
);

export const OptionsRatingInfo = (
	<div>
		<h1
			style={{
				textAlign: 'left',
			}}
		>
			Rate Options
		</h1>
		<p>
			Rate every decision option for every selection criteria, by moving the slider.
		</p>
	</div>
);

export const OptionsResultInfo = (
	<div>
		<h1
			style={{
				textAlign: 'left',
			}}
		>
			Decision Options Ranking
		</h1>
		<p>
			The chart shows you the best option based on your previous input, on a scale from 0 to 10.
			<br />
			<br />
			The best option is the one with the highest scores in the most important criteria for you. It's also the one, in
			which you are facing the minimum amount of trade-offs.
		</p>
	</div>
);

export const CriteriaResultInfo = (
	<div>
		<h1
			style={{
				textAlign: 'left',
			}}
		>
			Selection Criteria Ranking
		</h1>
		<p>The chart shows you on a scale from 0 to 10, which criteria is the most important for your decision.</p>
	</div>
);
