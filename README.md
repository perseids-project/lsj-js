# LSJ JS

This is the entire Liddell-Scott-Jones Greek-English Lexicon in JavaScript.
You should be able to use this web app with or without internet access once you load it once.

## Source

The LSJ text used is based on
[https://archive.org/details/Lsj--LiddellScott](https://archive.org/details/Lsj--LiddellScott).

## Try it Out

[https://perseids-project.github.io/lsj-js/](https://perseids-project.github.io/lsj-js/)

### How to Use

Type a word in the input box and you should see the definition(s) appear below.

Iota after a long vowel can be written either as subscript or not:
`ᾗπερ` and `ἧιπερ` are both valid.

If you include accents, breathing, and the iota subscript,
then they will be included in the search. If you leave them out, it will try to find all
potential matches.

You can also use Latin characters. The romanization is pretty flexible.
For example, `heiper`, `heper`, `eiper`, and `eper` all work for `ᾗπερ`.


## Installation

`yarn install`

## Updating the dictionary

Update the file `vendor/lsj.json` with any changes then run `yarn run build-dictionary`.

## Running the development server

`yarn start`

## Building for deployment

Before creating a production build you need to know the path where it will be accessed.
Then run the command `PUBLIC_URL='./path/of/app' yarn build`.
This will generate a set of static files in the `build/` directory that you can serve.

For example, if you want to deploy it at `www.example.com/` then run `PUBLIC_URL='./' yarn build`.
If you want to deploy it at `www.example.com/lexica/lsj` then run
`PUBLIC_URL='./lexica/lsj' yarn build`.

## Running tests

`yarn test`

## Linting the code

`yarn lint`

## Deploying a new version to github.io

`yarn deploy`
