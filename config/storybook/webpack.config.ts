import webpack from 'webpack';
import { BuildPaths } from '../build/types/config';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { RuleSetRule } from 'webpack';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  // if (config.module && config.module.rules) { 
  //   config.module.rules = config.module.rules.map((rule) => {
  //     if(/svg/.test(rule.test)) {
  //       return {
  //         ...rule,
  //         exclude: /\.svg$/i,
  //       }
  //     }
  
  //     return rule;
  //   });
  // }

  config.module?.rules?.push(buildCssLoader(true));

  return config;
};