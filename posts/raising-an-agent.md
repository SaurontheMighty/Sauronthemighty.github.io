## Raising an Agent
Writing my own AI agent brought to mind a lot of symmetries with parenting. Given that I have no children and ~one month of AI experience, I figured that I was just about qualified enough to write an article about it on the internet.

Parenting is quite fascinating and having grown up all over the place, I've been able to observe many different forms of parenting. In India, scolding is big. Make a mistake? You're told very clearly that you're action was bad and you shouldn't do it. However, in North America, there is another form of parenting I have observed alongside scolding. It involves treating your kid like an adult. This usually involves pointing out the consequences of their actions so that they themselves can conclude that the action is an undesirable one. While kids of both cultures seem to  turn out generally okay, from my limited experience volunteering it did seem like kids responded better to the second approach. 

### What's an Agent
Everyone is talking about AI agents but it was only last week, after I built one, that I learnt that agents are just loops. Every iteration, a call is made to an LLM and the LLM's response is added to a log that is passed in as input for the next iteration. And if you give the LLM the ability to use tools as part of its responses you really start to feel the power. If you thought that adding AI agents to your software product would be the wedge that saves you, I fear you will be disbursed of that notion fairly quickly. Agents can be quirky to get right but unfortunately like much of software has proven to be, they are trivial to build.

![Always has been](/alwayshasbeen.png)

### iMessage Engineer
I wanted to build an agent that I could talk to over iMessage with the goal that perhaps this agent could write code and do some work for me while I'm on the go. Think OpenClaw but less access to a whole OS and more engineering focused. I wrote a prompt, gave it access to some tools and let it go wild. Unfortunately the results were far from spectacular. But then I thought, why not just give Claude access to the agent as a cli, tell it to run the agent, trace the logs and then improve the agent? This seemed rather magical, using AI to build AI. This is the future we've been promised after all. 

> "Because AI is now writing much of the code at Anthropic, it is already substantially accelerating the rate of our progress in building the next generation of AI systems. This feedback loop is gathering steam month by month, and may be only 1–2 years away from a point where the current generation of AI autonomously builds the next." — Dario Amodei in [The Adolescence of Technology](https://darioamodei.com/essay/the-adolescence-of-technology)

Unfortunately, this didn't go well. 

### Agents don't treat Agents well
Claude had a two pronged approach to dealing with undesirable behaviour:
1. Reactive shouting
2. IMPORTANT chaining

When the agent did something distinctly undesirable like commit to the main branch, Claude would immediately update the system prompt with something like "Do NOT commit to the main branch". Every single undesirable action lead to a new selectively capitalized line in the system prompt.

If I interjected with a complaint like "the agent is sending paragraphs, this is texting, it should respond in short sentences.", Claude would append the system prompt with a command prefaced with `IMPORTANT`. For example `IMPORTANT: This is texting, reply with 1-2 sentences not paragraphs`. 

The result of a couple runs of letting an agent tune an agent was a very shouty system prompt riddled with `IMPORTANT` tags that didn't seem to perform much better than the one I started with. It's kind of like whack-a-mole, if you specifically ban the agent from doing a specific action, it probably won't repeat the action but it doesn't stop similar actions of the same class from taking place.

Plus, when I read the resulting system prompt I felt quite bad. It sounds silly to imagine yourself as an agent, but even so, if I were an agent, I would not want to read a prompt like that. Very little on what to do, very much on what not to do.

So I decided to scrap it and write a mini-essay telling the agent who it is, why it exists, what its goals are and what its voice is. This approach solved entire classes of issues at once. The agent was instantly more helpful, more capable and all around more fun to text.

### Agent Empowerment
The original vision of the project was that the agent you text is not the agent that actually goes and makes changes to your code. The agent you talk to is more like a concierge or dispatcher that figures out the repository you're trying to make a change in and then dispatches a coding agent to actually go and make the change. I felt that this was the right approach for the sake of context management but also because I wanted to be able to have multiple sessions at once.

A hand written system prompt seemed to solve most of the issues around tone and picking the right actions but it still had some issues around hallucination. The agent would say things like "the task is running" when it wasn't. But what I found was that for every hallucination there was a tool I could provide that just completely solved it. For example in this case giving it the ability to check up on the status of the coding agent meant that it never hallucinated the status of the task again. It seems so obvious but just asking `what tool could I give the agent` in response to every hallucination felt like a breakthrough.

Turns out that if the agent knows what it's supposed to do and has the tools to actually do it, it performs shockingly well. 

### Agent Parenting Conclusions
My learnings from this fun experiment seem to be that agents are a lot like people. Give them the information they require, the tools to succeed and that's just what they'll do.

We're witnessing a paradigm shift from coding to prompting and from workstations to wherever you may be, whenever you may have time. A lot of people I talked to were interested in 'an engineer you can iMessage' so we're planning on rolling it out to a few people to try. We haven't monetized it yet so if nothing else you get free Codex. If you're interested you can sign up at [kotyo.ai](https://kotyo.ai).

