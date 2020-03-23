---
sidebarDepth: 1
---

# Publishing to skill store
So you think your freshly written skill is ready to be shared with the rest of the world? That's great! Here are the steps to have your skill published, from checking that everything is ok to have it published, let's review the remaining steps

## Checking your skill
Because we like things clean and following a strict guideline!

### Code guideline
Very first step, to make sure the demon Psycho doesn't eat you alive, you want to check your syntax and code formatting. Are they following our [code guidelines](../contribute/code-guidelines)? Did you indent your code with tabs and **not 4 spaces**? Did you strong type your methods, adding variable type hints and return type hint? Your methods names are following camelCase and so do your variables? Check the guidelines and you'll be all set!

### Skill validation
Then we want to make sure your skill is operational and clean. For that, your need a handy tool that we provide, called **projectalice-sk**. Let's first install it:

`pip3 install projectalice-sk` 

Navigate to the parent directory where you have your skill. If we continue our *HelloWorld* example:

`cd ~/ProjectAlice/skills`

And start the check!

`projectalice-sk validate --paths HelloWorld`

This will output a few things while checking your talk files, your dialog templates, your install file and others. If everything comes out clean it will tell you the skill is **valid**. Keep in mind it still doesn't mean it is **working** but at least it won't crash Alice's start if deployed on an existing assistant. Great

### Publishing
As of now, I'm still thinking on how people are going to publish their skills to our store. I want to keep an eye on the proposed skills and make sure it's not malicious code and that it is of quality. I'm a real pain, I can tell you, but that's only for the good of the many. Knowing this, you understand that the publishing is made exclusively by the Project Alice team, after some checking and deployments on our side, in fact, we have several things to do to make your skill available.

What you want to do though, is [propose your skill for the store](https://github.com/project-alice-assistant/ProjectAliceSkills/issues/new?assignees=Psychokiller1888&labels=Skill+publish+request&template=skill-publishing.md&title=%5BNew+skill%5D)

### After publishing
Once we get your request, we'll fork your repository into Project Alice organisation, review your skill and make sure everything's ok. If there's something not ok, we'll let you know. Once we have forked your skill, you'll need to open Pull Requests onto it to keep it updated!
