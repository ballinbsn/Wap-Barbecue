
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.Db3KX98s.js","/cdn/shopifycloud/checkout-web/assets/c1/app.BpX_QXpx.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.nA8SwDMh.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.o8T5ujM8.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-policy.B6uO4X1N.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-installmentsNotSupportedForAddress.D20Z_K42.js","/cdn/shopifycloud/checkout-web/assets/c1/addresses-is-address-empty.BIWI30b6.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared.B3pAqtHE.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-mapper-load-recovery.4MceqUc0.js","/cdn/shopifycloud/checkout-web/assets/c1/receipt-eager-mappers.DUOZnudc.js","/cdn/shopifycloud/checkout-web/assets/c1/sections-shared.DjvG0YYD.js","/cdn/shopifycloud/checkout-web/assets/c1/error-logger-report-graphql-error.DIjTaCf5.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shopCashMoney.iQsV6DB5.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails.Lq4Ey80B.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-derivations.B_8gvF0e.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-grouping.Csb1ix6i.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-browser.Bk3jGNht.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.r05kVcKX.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayExternalAppContext.cCmb7o8k.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.CqyiCNJX.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage.CL8OOtFX.js","/cdn/shopifycloud/checkout-web/assets/c1/components-DeliveryTransition.COpaZSPU.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.knnD6CSm.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.dDui1_aO.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShouldRevealExtension.B3sfSGPu.js","/cdn/shopifycloud/checkout-web/assets/c1/cross-border-hooks.-Atgnqcw.js","/cdn/shopifycloud/checkout-web/assets/c1/business-customer-constants.eNd5AjRA.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.C9m5bd7F.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.gVqBD3Ue.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.B5Qfpx7g.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.BavmDWgc.js","/cdn/shopifycloud/checkout-web/assets/c1/components-RedirectionNotice.module.DgKr5YMy.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice.DZZsW59H.js","/cdn/shopifycloud/checkout-web/assets/c1/Checkbox.no5EujT-.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.CvGPggAk.js","/cdn/shopifycloud/checkout-web/assets/c1/ImpressionEventCapture.DN7fDFm0.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-previous.CoktJaez.js","/cdn/shopifycloud/checkout-web/assets/c1/CaptureEvents-ButtonWithRegisterWebPixel.CB3ZqASl.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo.CkbNt1vK.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.HQ8KySY0.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.D0GS3gF0.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.f18ouHuM.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsMonorailTrack.DHNwNACi.js","/cdn/shopifycloud/checkout-web/assets/c1/EmptyState.HULCGGbU.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-SectionStyleOverride.DK0gva3j.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.BZGJ1Tuh.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.B0gfP3YP.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeSection.C1R5ychv.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon.B-Orm8PQ.js","/cdn/shopifycloud/checkout-web/assets/c1/cvv-cvvBridge.BVBxpjeH.js","/cdn/shopifycloud/checkout-web/assets/c1/payment-usePaymentExemptionReason.B3yJq8fs.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.D_NjsmvB.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.B9XTWpcM.js","/cdn/shopifycloud/checkout-web/assets/c1/Page.CVO6jDE5.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.DoAAMEV6.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.ClW2MIqu.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.DJvjd9iU.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.D0rj8fAf.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.Byvr3FHQ.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButton-sizing.DuIA-URY.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPaySessionTokenStorage.ZtE4MrNF.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler.CsKrRC48.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-as-guest-amazon-pay.CK_1Vbc3.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button.BhaJf6tN.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePreselectSpi.Dp42_NZ2.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.BWHfZZgs.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useAvailableShopPromotionDiscounts.DshmJuuj.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.B7_bFUyM.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.Bblt6AOf.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.CB3LZub1.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included.C6hT2ai3.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines.CQLMC9D9.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.jt1TzjQe.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.Db-idi6H.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.DX68wTuP.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.q_QFVGUy.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.CnrKHiXv.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayNewSignupLoginExperiment.DrLOkSzH.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.Drl2DfNO.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.rPEEz-WH.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.rFVdfMxu.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.C-0YONQj.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CM6PQxCl.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/checkout-policy.Dy6nOzcc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/helpers.sIyK4oF-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.DkWpx8b4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DeliveryTransition.CxmS455s.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.DQeXjG1A.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.D3bcP-mr.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.tSP6pJcp.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/cvvBridge.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.DNWz77j7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/sizing.ZgfJ23-d.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.Dq_6Ius6.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EmptyState.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CpHF4L7Q.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MerchandiseModal.D6OuIVjc.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/RedirectionNotice.B8v_QGNW.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.2B5x30PG.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentButtons.BbF1yV61.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  