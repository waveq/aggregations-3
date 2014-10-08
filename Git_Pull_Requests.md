## GitHub Pull Requests

Trzy sposoby radzenia sobie z taką sytuacją:
**We can’t automatically merge this pull request.**

Sposób 1, sugerowany przez GitHub Team:

```sh
git checkout -b miotla007-master master
git pull git://github.com/miotla007/aggregations-2.git master
git checkout master
git merge miotla007-master
git push origin master

git branch -d miotla007-master
```

Sposób 2, [Configure remotes](https://help.github.com/articles/fork-a-repo#step-3-configure-remotes):

```sh
# dociąganie zmian z oryginalnego repozytorium
git pull upstream

# rebasing naszego brancha
git checkout my-branch
git rebase upstream
  # rozwiązywanie konfliktów jeżeli zajdzie potrzeba
  # (instrukcje pojawią się na ekranie)
```

Dużym plusem tego sposobu jest brak commita z mergem
(porządek w historii repozytorium).

Sposób 3:

```sh
git remote add miotla007 git://github.com/miotla007/aggregations-2.git
git fetch miotla007
git merge miotla007/master
  .. edycja .. rozwiązywanie konfliktów
git push origin master

git remote rm miotla007
```

### Zmniejszamy liczbę commitów, zmieniamy ich kolejność itp.

> Another common practice is to rebase
> the last few commits in your current branch
>
> [Interactive rebase](https://help.github.com/articles/interactive-rebase) on GitHub

```sh
git checkout issue16                       # o ile commity są na tej gałęzi
git log --pretty=oneline HEAD~8..HEAD      # sprawdzamy ostatnich 8 commitów
git rebase -i HEAD~4                       # zmieniamy ostatnie 4 committy

.. edycja ..
....  edit -- jeśli chcemy poprawić ten commit lub coś do niego dodać
........  git reset HEAD^  # rollback the last commit
........  git status
........  git add --patch  # lub dodajemy/edytujemy pliki
........
........  git rebase --continue
....  reword -- poprawiamy tekst wpisu do log
```

*Uwaga:* Na stronie manuala *gitrevisions* jest opisane znaczenie:
`HEAD^`, `^HEAD`, `HEAD~n`.

Teraz sprawdzamy wpisy log i scalamy wprowadzone zmiany:

```sh
git log --pretty=oneline
git rebase master                          # o ile jesteśmy na gałęzi issue16
git checkout master
git merge issue16
git branch -d issue16                      # możemy usunąć scaloną gałąź
```

### Undo różnych rzeczy

```sh
git reset --merge           # merge
git reset --hard ORIG_HEAD  # rebase
```

### Stashing

Odkładamy na później...

```sh
git stash
git stash list
git stash apply stash@{0}  # przykłady
git stash drop  stash@{0}
```

### Różne rzeczy

* Mark Dominus
  - [Why can't Git resolve all conflicted merges?](http://blog.plover.com/prog/git-merge.html)
  - [My Git Habits](http://blog.plover.com/prog/git-habits.html)
* Bert Belder, [Checkout github pull requests locally](https://gist.github.com/piscisaureus/3342247)
* Chris Wanstrath, [Hub makes git better with GitHub](http://defunkt.io/hub/)
* Scott Chacon, [Pro Git](http://git-scm.com/book);
  [Pro Git PL](http://git-scm.com/book/pl) (tłumaczenie na język polski)
  - [6.4 Git Tools - Rewriting History](http://git-scm.com/book/en/Git-Tools-Rewriting-History)
* Seth Robertson, [On undoing, fixing, or removing commits in git](http://sethrobertson.github.io/GitFixUm/fixup.html)
* [Going back in time to split older commits](http://blog.thoughtram.io/posts/going-back-in-time-to-split-older-commits/) –
  na blogu „ThoughtRAM - extend your memory”
