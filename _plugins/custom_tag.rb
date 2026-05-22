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

class LocalSocialLink < Liquid::Tag
    def initialize(tag_name, channel, _tokens)
      super
      @channel = channel
    end

    def render(context)

      # add channels here as necessary
      channel_property = ""
      if( @channel.strip == "telegram" )
        channel_property = "telegram_link"
      end

      currentLang = context.environments.first["page"]["lang"]
      for language in context.environments.first["site"]["data"]["languages"]
        if( language["tag"] == currentLang )
          return language[channel_property]
        end
      end
    end
  end

Liquid::Template.register_tag('local_social_link', LocalSocialLink)

class SupplySpanned < Liquid::Tag
  def initialize(tag_name, dest, _tokens)
    super
    @dest = dest
  end

  def render(context)
    str = context.environments.first["page"]["supplyChange"]
    return "<span>" + str[0] + "</span>" + str[2..]
  end
end

Liquid::Template.register_tag('supply_spanned', SupplySpanned)

module BlankTargetRel
  REQUIRED_REL_TOKENS = %w[noopener noreferrer].freeze
  TARGET_BLANK_ANCHOR = /<a\b(?=[^>]*\btarget\s*=\s*(['"])_blank\1)[^>]*>/i.freeze
  REL_ATTRIBUTE = /\brel\s*=\s*(['"])(.*?)\1/i.freeze

  def self.apply(html)
    html.gsub(TARGET_BLANK_ANCHOR) do |tag|
      if tag =~ REL_ATTRIBUTE
        quote = Regexp.last_match(1)
        existing_tokens = Regexp.last_match(2).split(/\s+/)
        rel_tokens = (existing_tokens + REQUIRED_REL_TOKENS).uniq
        tag.sub(REL_ATTRIBUTE, "rel=#{quote}#{rel_tokens.join(' ')}#{quote}")
      else
        tag.sub(/>$/, ' rel="noopener noreferrer">')
      end
    end
  end
end

Jekyll::Hooks.register [:documents, :pages], :post_render do |document|
  document.output = BlankTargetRel.apply(document.output)
end
