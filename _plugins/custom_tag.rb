class LingualLink < Liquid::Tag
  def initialize(tag_name, dest, _tokens)
    super
    @dest = dest
  end

  def render(context)
    lang = context.environments.first["page"]["lang"]
    ( lang == "en" ) ? "/#{@dest.strip}/" : "/#{lang}/#{@dest.strip}/"
  end
end

Liquid::Template.register_tag('lingual_link', LingualLink)
