module Jekyll

  class ExtendConfigGen < Generator
    safe true
    priority :highest

    def generate(site)
      time = Time.new
      site.config['build_time'] = time.strftime("%Y%m%d%H%M")

      tree = YAML.load_file('./source/site-info.yml')
      if tree
        for node in tree
          key = node[0]
          val = node[1]
          site.config[key] = val
        end
      end

    end
  end

end