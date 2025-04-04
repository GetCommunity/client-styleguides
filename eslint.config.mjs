import eslint from '@eslint/js';
import { resolve } from 'path';
import process from 'process';
import tseslint from 'typescript-eslint';

const tsProject = resolve(process.cwd(), 'tsconfig.json');

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: tsProject,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
