import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const RulesList = styled.div``

const RulesPage = () => (
  <Layout>
    <SEO title="Rules" />
    <h1>Rules</h1>
    <h2>Redraft League Rules</h2>
    <RulesList>
      <div>
        <h3>1. League Dues</h3>
        <p>
          League dues are due at the draft. This is required in order to prevent
          future payment hassle as well as ensuring every participant is active
          and attentive to their team.
        </p>
      </div>
      <div>
        <h3>2. Trades &amp; Vetos</h3>

        <p>
          The only acceptable veto for a trade is under collusion, suspected
          collusion, or cheating. Period.
        </p>
        <p>
          <em>"I don’t want that team getting better"</em> or{" "}
          <em>"that owner isn’t getting an equal value of that player"</em> are
          not acceptable reasons to veto a trade. Player valuations are
          subjective, meaning we are all different people who value players
          differently. There is no set standard on what a player is worth.
          Generally a trade should fill a need for both teams. That need is
          determined only by the manager of that team and no one else. In
          addition to player valuations being subject, there is no way to
          actually predict the outcome of a trade. There are plenty of scenarios
          where a trade that appears to lean heavily in favor of one side ends
          up doing just the opposite. In any trade there is a possibility of a
          winner and a loser. That's the nature of fantasy football.
        </p>
        <p>
          Obvious lopsided trades (i.e. a kicker for a skill position) will
          likely result in both managers not being invited to the league in the
          future, as well as expulsion from the current season. You will not be
          refunded your league dues for cheating.{" "}
          <strong>Do not put us in that position</strong>.
        </p>
        <p>
          Player swaps are also illegal. It's possible that trading a player or
          players to someone and then making the exact return trade in the
          future is completely legitimate. However, the precedent that it sets
          is poor, and therefor not allowed.
        </p>
        <p>
          You are not babies and we will not be holding your hand. If you cheat,
          then you will be removed.
        </p>
      </div>
      <div>
        <h3>3. Positional Roster Limits</h3>
        <p>There are no positional roster limits.</p>
      </div>
      <div>
        <h3>4. Last Place &amp; Consolation Bracket</h3>
        <p>
          Last place is not "awarded" to the team that has the worst record
          after the regular season concludes. The six teams who do not make the
          playoffs will form their own consolation bracket. This is to ensure
          that teams continue to play even if they did not make the post-season.
          Teams who did not make the post-season are still allowed and are even
          encouraged to participate in waiver claims. The loser of this bracket
          (the team that does not win any games) will be the last place
          "winner". Last place receives a very special trophy and is subject to
          (humiliating) league punishment at the following year's draft party.
        </p>
      </div>
      <p>
        <br />
        <br />
        <br />
        <em>These rules are subject to change at any time.</em>
      </p>
    </RulesList>
  </Layout>
)

export default RulesPage
