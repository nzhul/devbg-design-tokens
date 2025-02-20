Transforms Documentation: https://github.com/tokens-studio/sd-transforms

1. Always export with multi-file, because multi-file export do not include the `Milestone/Light` parentKeys, which is required for the transforms to work.
2. You can export multi-file for free from figma, but only to a folder on your computer
   - if you want to export directly to github, you need to pay for the Token Studio Pro
3. If you export in single-file, the transforms won't work, because the references are broken.
    - they can be manually fixed by adding `Milestone/Light.primitive...` at the begining of each variable, but this will require a custom script.



-----

I managed to hack the single-file export. Here is how:
Because actual tokens we are interested in is inside the "Milestone/Light" parent. What I am doing is manually processing the file before passing it to the style dictionary transforms.
