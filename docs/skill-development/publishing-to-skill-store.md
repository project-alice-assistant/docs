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

## Publishing
As of now, I'm still thinking on how people are going to publish their skills to our store. I want to keep an eye on the proposed skills and make sure it's not malicious code and that it is of quality. I'm a real pain, I can tell you, but that's only for the good of the many. Knowing this, you understand that the publishing is made exclusively by the Project Alice team, after some checking and deployments on our side, in fact, we have several things to do to make your skill available.

What you want to do though, is [propose your skill for the store](https://github.com/project-alice-assistant/ProjectAliceSkills/issues/new?assignees=Psychokiller1888&labels=Skill+publish+request&template=skill-publishing.md&title=%5BNew+skill%5D)

## After publishing
Once we get your request, we'll fork your repository into Project Alice organisation, review your skill and make sure everything's ok. If there's something not ok, we'll let you know. Once we have forked your skill, you'll need to open Pull Requests onto it to keep it updated!

Once we have forked it and added it to our quality and store control Continuous integration, you can check it's status by going to:

`https://projectalice.io/skill_YOUR_SKILL_NAME`

On top of the readme, you will find a badge called "pipeline":

<img src="/images/pipeline_badge.png" alt="pipeline badge">

That badge should say "passed". In case not, something went wrong publishing the skill. Simply click on the badge to be redirected to gitlab where you will be able to understand what failed. We have 5 jobs that run before a skill is available and you can influence the 3 first ones because they test your code and react to your changes in files:

<img src="/images/pipeline_example.png" alt="pipeline example">

The third one, the sonarcube check won't stop a deployment but reflects the quality of your code. It is allowed to fail. The first 2 jobs though cannot fail or your skill won't get published. If either one of them or both failed, click on their icons to navigate to the test and a report of what failed. You'll need to correct those and submit pull requests to fix the issues. Once the first 2 tests succeeded and the third ran, the deployement will begining and should take about 2 minutes. It is also a good idea to subscribe to the repository on Gitlab so you get email alerted if a job fails for your skill.
