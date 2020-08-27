class LingualLink < Liquid::Tag
  def initialize(tag_name, dest, _tokens)
    super
    @dest = dest
  end

  def render(context)
    lang = context.environments.first["page"]["lang"]
    if @dest.strip == 'home' || @dest.strip == 'image'
      return ( lang == "en" ) ? "/" : "/#{lang}/"
    end
    return ( lang == "en" ) ? "/#{@dest.strip}" : "/#{lang}/#{@dest.strip}"
  end
end

Liquid::Template.register_tag('lingual_link', LingualLink)

class IsCurrentPage < Liquid::Tag
  def initialize(tag_name, dest, _tokens)
    super
    @dest = dest
  end

  def render(context)
    urlParts = ( context.environments.first["page"]["url"] ).split('/')
    urlParts.each_with_index do |part,index|
      if( ( part.strip == @dest.strip ) && ( index == 2 || index == 1 ) )
        return 'current'
      end
    end
  end
end

Liquid::Template.register_tag('is_current_page', IsCurrentPage)
