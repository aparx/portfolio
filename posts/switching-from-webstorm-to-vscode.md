---
title: Switching from Webstorm to VSCode
subtitle: Boosting productivity with VSCode after years w/ JetBrains
createdAt: 2024-06-28
tags:
  - VSCode vs Webstorm
  - IDE Performance
  - Switching IDEs
  - Developer Productivity
  - Code Editor Comparison
---

This blog article was originally posted [as a Medium article](https://medium.com/@aparx/why-i-switched-from-webstorm-to-vscode-46a433922232) here.

&nbsp;

We all know and love it: the debate about what IDE we as 10x developers should use. Some argue Notepad++ is the best, while actual developers prefer VIM and JS-Andys VSCode. I am not here to discuss what IDE or Code Editor you or your company should use, but I am telling you a story of me, of why I switched from years of being consistently in the Jetbrains Ecosystem to VSCode.
&nbsp;
Well, before we get to the hot topic, I would like to tell you a bit about how I ended up here.

### Quick summary of my journey

I started my development journey around 2015 with good old Visual Basic (remember that?) and moved to Java. Eversince I tried out multiple low- and high-level languages and paradigms.
I started my actual voyage with Eclipse, and when I got more into programming I switched to Jetbrains' IntelliJ quite quickly (that must have been around 2017). Since that switch, I never had the incentive of using anything else for larger projects. Tho, in some instances I used Atom and Sublime Text to get a gist of code editors. More consistently I ended up using CLion, Rider, PHPStorm, IntelliJ, Webstorm, DataGrip and of course sometimes VSCode to quickly modify things. No VIM mentioned btw. - well nevermind I just did
&nbsp;
I ended up specializing in Fullstack Development, with tendency towards Frontend. Being a solo engineer most of the time, I cannot comment on the collaboration differences between the Code Editor and the IDEs.

### My experience with Jetbrains IDEs

Don't get me wrong. I love the Jetbrains Ecosystem, otherwise I would have not stuck with it for so long. And, depending on the project, I will definitely go back and use some of the tools available, but not as consistently.
When I started doing web work, I started off using PHP and learned it quite intensively, so the obvious choice was near: I had experience working with heavy IDEs, so why wouldn't I use PHPStorm? - Well, that experience was quite decent. The LSP is working really good, the integration is decent, and the tools Jetbrains provides are of course quite helpful. But there is the catch: When I started my journey and started integrating and addicting myself to the ecosystem, the projects would be of small (I mean … average) size. So the larger the projects grew, the more time I spent working with these IDEs, the more problems would arise.
For the sake of simplicity, I will continue to use the word "IDE" to mean IntelliJ or Webstorm.

### The ouchy issues with the IDE

As stated previously, the larger the projects grew, the more issues would be visible on the surface.
People say you need to hydrate, so I did while waiting for the IDE to index. I ended up feeling I was drowning, drowning of liquified boredom while waiting for the IDE to index my files, even with optimizations, one of which is explicitly removing some directories from being indexed, it would take time. In monorepos with over 200.000 Lines of Code I would end up losing my LSP entirely! Especially TypeScript projects were really slow, and the auto completion would take time, not even mentioning the stutters you'd end up with when writing code just because of Intellisense.
And here's the first difference: VSCode does not do indexing the way Webstorm does it, since it isn't an IDE, it is a Code Editor, so the features and capabilities differ.
Another issue was that I wanted to extend the IDE's behaviours and style, to appropriately meet my expectations and productivity, add more keyboard bindings, edit the way the IDE was styled, and it was not always easy. There aren't that many extensions available, not nearly as many as VSCode has, so you either have to make them yourself from scratch or wait for someone to publish it.
My latest project, being a monorepo, has accumulated around 240.000 Lines of Code at the time of writing and like mentioned above, my LSP would silently stop working in some files over time. Nothing fixed it. But the project is for a startup and has an internal deadline, so I ended up switching to VSCode. The latest update fixed my issues, but I already got accustomed to the VSCode environment. For that project I now primarily use VSCode and DataGrip (for SQL migrations that include PL/pgSQL).

### Why VSCode feels better

First and foremost, VSCode feels faster. Tho, this is quite ironic, since it is running on Electron, compared to Jetbrains' IDEs that run on the JRE.
VSCode has more extensions, is much more extensible, is open source, FREE and is backed by Microsoft, a larger company than Jetbrains. After the recent drama, about Jetbrains' Space discontinuation, I've heard of teams having to migrate back to their previous approach, which costs time and ultimately money. So I imagine the trust for many is gone aswell.
In order to have the entire toolset from Jetbrains available, you need to open up your wallet and give them a couple nice looking bills. And for someone that just want to work productively and fast with minimal costs, it is not cheap.

### Conclusion

Well, in the end VSCode is still just a Code Editor and I imagine for collaboration nowhere near. Also, when working with anything else than JS or TS, I would not recommend VSCode. For Java, IntelliJ is unmatched and also the indexing and LSP work faster (at least that is what it feels like). Also, DataGrip for working with SQL source is unmatched, while VSCode provides next to none for me working or matching experiences.
I guess this is where the background of Jetbrains comes from. Of course it will be really good for Java, since it was the primary target of them from the get go. JS, TS and other language's integrations came after, contributing to bloating the IDE. It also feels like most of the Jetbrains products are copy and pastes of each other, with feature flags telling the user what is allowed and what isn't.
So in the end, choose what is most efficient for you and your workflow.
For me the simplicity of VSCode and the actual, very fast, working LSP despite a "larger" project makes it more usable for my applications.
Thank you a lot for reading, and I hope you enjoyed. This is my first article, so please forgive me if I made some mistakes.
